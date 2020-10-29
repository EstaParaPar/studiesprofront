import {Component, OnInit} from '@angular/core';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {TokenStorageService} from '../../../service/token-storage.service';
import {Router} from '@angular/router';
import {MachinesService} from '../../../service/machines.service';
import {StudiestypeService} from '../../../service/studiestype.service';
import {UserdataService} from '../../../service/userdata.service';
import {HealthInsuranceService} from '../../../service/healthinsurance.service';
import {PatientsService} from '../../../service/patients.service';
import {NgOption} from '@ng-select/ng-select';
import {NewStudiesService} from '../../../service/new-studies.service';

@Component({
    templateUrl: 'newStudy.component.html'
})
export class NewStudyComponent implements OnInit {


    machineArray = [];
    selectedMachineId: number;
    dataHealthIn = [];
    nameHealthIn = [];
    doctorArray = [];
    selectedDoctorId: number;
    estudiosArray = [];
    selectedStudyId: number;
    currentUser: any;
    patients = [];


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
        private newStudiesService: NewStudiesService) {
    }

    ngOnInit(): void {
        if (!this.tokenStorageService.isloggedin()) {
            this.router.navigate(['']);
        } else {
            this.init();
            console.log(this.dataHealthIn);
        }
    }



    init(): void {
        this.currentUser = this.tokenStorageService.getUser();

        this.machinesService.getMachines().subscribe((data: any[]) => {
            // console.log(data);
            this.machineArray = data;
            //  this.userList = data;
        });
        this.healthInsuranceService.getHealthInsurance().subscribe((data: any[]) => {
            this.dataHealthIn = data;
            
            this.setnameHealthIn();
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

    setnameHealthIn(): void {
        var listAux = this.dataHealthIn;
        for (var i = 0; i < listAux.length; i++){
            this.nameHealthIn.push(listAux[i].name.toLowerCase());
        }
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
        console.log(this.newHealthIns);
    }

    findHealth() {
        this.newHealthIns = false;
        console.log(this.newHealthIns);
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
        this.messageFormValid = 'completar todos los campos';
        let valid = true;
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
                
                var index = this.nameHealthIn.indexOf(this.health.name.toLowerCase());
                if (index >= 0) {
                    valid = false;
                    this.messageFormValid = 'La obra social ya existe';
                }

            }
        }else {
            if (this.selectedHealth == null) {
                valid = false;
            }
    
        }

        this.validform = valid;
    }

}

