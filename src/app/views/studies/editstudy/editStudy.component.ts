import {Component, OnInit} from '@angular/core';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {TokenStorageService} from '../../../service/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MachinesService} from '../../../service/machines.service';
import {StudiestypeService} from '../../../service/studiestype.service';
import {UserdataService} from '../../../service/userdata.service';
import {HealthInsuranceService} from '../../../service/healthinsurance.service';
import {PatientsService} from '../../../service/patients.service';
import {NgOption} from '@ng-select/ng-select';
import {NewStudiesService} from '../../../service/new-studies.service';
import { StudiesService } from '../../../service/studies.service';

@Component({
    templateUrl: 'editStudy.component.html'
})
export class EditStudyComponent implements OnInit {


    machineArray = [];
    selectedMachineId: number;
    dataHealthIn = [];
    doctorArray = [];
    selectedDoctorId: number;
    estudiosArray = [];
    selectedStudyId: number;
    currentUser: any;
    patients = [];
    currentStudy;


    selectedPatientsId: number;
    selectedDNI: number;
    selectedNAME: any;
    selectedLASTNAME: any;
    selectedHealth: any;
    validform = true;
    messageFormValid = 'completar todos los campos';


    studies = {
        pname: '',
        plastname: '',
        pdni: '',
    };
    date = {
        studyDate: ''
    };
    health = {
        name: ''
    };
    newPatient = false;
    newHealthIns = false;
    healthinsurance = 1;


    constructor(
        private studiesTypeService: StudiestypeService,
        private machinesService: MachinesService,
        private userdataService: UserdataService,
        private healthInsuranceService: HealthInsuranceService,
        private patientsService: PatientsService,
        private router: Router,
        private tokenStorageService: TokenStorageService,
        private newStudiesService: NewStudiesService,
        private route: ActivatedRoute,
        private studiesService: StudiesService) {
    }

    ngOnInit(): void {
        if (!this.tokenStorageService.isloggedin()) {
            this.router.navigate(['']);
        } else {
            this.init();
        }
    }



    init(): void {
        this.currentUser = this.tokenStorageService.getUser();
        this.getStudy(this.route.snapshot.paramMap.get('id'));

        this.machinesService.getMachines().subscribe((data: any[]) => {
            // console.log(data);
            this.machineArray = data;
            //  this.userList = data;
        });
        this.healthInsuranceService.getHealthInsurance().subscribe((data: any[]) => {
            // console.log(data);
            this.dataHealthIn = data;
        });
        this.patientsService.getPatients().subscribe((data: any[]) => {
            // console.log(data);
            this.patients = data;
        });

        this.userdataService.getDoctors().subscribe((data: any[]) => {
            // console.log(data);
            this.doctorArray = data;
        });

        this.studiesTypeService.getStudiesType().subscribe((estudios: any[]) => {
            // console.log(data);
            this.estudiosArray = estudios;
        });
    }
    /*"id": 32, "state": 4, "currentPrice": 0, "studyDate": "2020-10-06T00:00:00.000Z", "createAT": "2020-10-10T13:34:13.840Z", "uptadeAT": "2020-10-10T19:57:40.000Z",
    "doctor": { "name": "doc", "lastname": "tor" },
    "technician": { "name": "tec", "lastname": "nico" },
    "studieType": { "id": 2, "name": "EEG CON ESTIMULACION COMPLEJA\t" },
    "machine": { "name": "PC DRA REITERI" },
    "idHealthInsurance": { "name": "galeno" },
    "idPatients": { "name": "borja", "lastname": "valero", "dni": 25652369 }*/

    getStudy(id): void {
        this.studiesService.getStudy(id).subscribe(
                data => {
                this.currentStudy = data;
                //this.date.studyDate = this.currentStudy.studydate;
                this.selectedStudyId = this.currentStudy.studieType.id;
                this.selectedPatientsId = this.currentStudy.idPatients.id;
                this.selectedDoctorId = this.currentStudy.doctor.id;
                this.selectedHealth = this.currentStudy.idHealthInsurance.id;
                this.selectedMachineId = this.currentStudy.machine.id;
                this.selectedDNI =this.currentStudy.idPatients.dni;
                this.selectedNAME = this.currentStudy.idPatients.name;
                this.selectedLASTNAME = this.currentStudy.idPatients.lastname;
                
                },
                error => {
                    console.log(error);
                });
    }


    saveNewStudy(): void {
        this.validateform();
        if (this.validform) {
        let datavalues;
        let healthDataSelected;
        let healthDataBit;
        if (this.newHealthIns) {
            healthDataSelected = this.health.name;
            healthDataBit = 1;
        } else {
            healthDataSelected = this.selectedHealth;
            healthDataBit = 0;
        }

        if (this.newPatient) {
            datavalues = {
                date: this.date.studyDate,
                study: this.selectedStudyId,
                machine: this.selectedMachineId,
                doctor: this.selectedDoctorId,
                technician: this.currentUser.username,
                name: this.studies.pname,
                dni: this.studies.pdni,
                lastname: this.studies.plastname,
                healthinsurance: healthDataSelected,
                newPatient: 1,
                newHealth: healthDataBit
            };
        } else {

            datavalues = {
                date: this.date.studyDate,
                dni: this.selectedDNI,
                study: this.selectedStudyId,
                machine: this.selectedMachineId,
                doctor: this.selectedDoctorId,
                technician: this.currentUser.username,
                patient: this.selectedPatientsId,
                healthinsurance: healthDataSelected,
                newPatient: 0,
                newHealth: healthDataBit
            };
        }

        const data = datavalues;

        this.newStudiesService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                    const ruta = 'studies/confirmstudy/' + response.id;
                    this.router.navigate([ruta]);


                },
                error => {
                    console.log(error);
                });
        // this.findPatient();
    }
    }
    addPatient() {
        this.newPatient = true;
    }

    findPatient() {
        this.newPatient = false;
    }
    addHealth() {
        this.newHealthIns = true;
    }

    findHealth() {
        this.newHealthIns = false;
    }


    onChangePatients($event) {

        if ($event) {
            this.selectedDNI = $event.dni;
            this.selectedNAME = $event.name;
            this.selectedLASTNAME = $event.lastname;
            this.selectedPatientsId = $event.id;
        }
    }
    onRemovePatients() {
        this.selectedPatientsId = null;
        this.selectedDNI = null;
        this.selectedNAME = '';
        this.selectedLASTNAME = '';
    }

    onChangeStudy($event) {
        if ($event) {
            this.selectedStudyId = $event.id;

        }
    }

    onRemoveStudy() {
            this.selectedStudyId = null;

        }


    onChangeDoctor($event) {
        if ($event) {
            this.selectedDoctorId = $event.id;

        }
    }

    onRemoveDoctor() {
            this.selectedDoctorId = null;

        }


    onChangeMachine($event) {
        if ($event) {
            this.selectedMachineId = $event.id;

        }
    }
        onRemoveMachine() {
            this.selectedMachineId = null;

        }
    onChangeHealth($event) {
        if ($event) {
            this.selectedHealth = $event.id;
        }
    }
    onRemoveHealth() {
        this.selectedHealth = null;
    }


    validateform() {
        let valid = true;
        if (this.selectedHealth == null) {
            valid = false;
        }
        if (this.selectedMachineId == null) {
            valid = false;
        }
        if (this.selectedDoctorId == null) {
            valid = false;
        }
        if (this.selectedStudyId == null) {
            valid = false;
        }
        if (this.date.studyDate == null || this.date.studyDate === '') {
            valid = false;
        }
        if (this.newPatient) {
            if (this.studies.pname == null || this.studies.pname === '') {
                valid = false;
            }
            if (this.studies.plastname == null || this.studies.plastname === '') {
                valid = false;

            }

            if (this.studies.pdni == null || this.studies.pdni.toString().length < 8) {
                valid = false;
            }
        } else {
            if (this.selectedPatientsId == null) {
                valid = false;
            }
        }

        if (this.newHealthIns) {
            if (this.health.name == null || this.health.name === '') {
            valid = false;
        } else {
            if (this.selectedHealth == null) {
                valid = false;
            }
        }

        }

        this.validform = valid;
    }

}

