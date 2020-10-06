import {Component, OnInit} from '@angular/core';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {TokenStorageService} from '../../service/token-storage.service';
import {Router} from '@angular/router';
import {MachinesService} from '../../service/machines.service';
import {StudiestypeService} from '../../service/studiestype.service';
import {UserdataService} from '../../service/userdata.service';
import {HealthInsuranceService} from '../../service/healthinsurance.service';
import {PatientsService} from '../../service/patients.service';
import {NgOption} from '@ng-select/ng-select';
import {NewStudiesService} from '../../service/new-studies.service';

@Component({
    templateUrl: 'dashboardDoctor.component.html',
    styleUrls: ['dashboardDoctor.component.css']
})
export class DashboardDoctorComponent implements OnInit {


    machineArray = [];
    selectedMachineId: number;
    dataHealthIn = [];
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
        }

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

    init(): void {
        this.currentUser = this.tokenStorageService.getUser();
    }


    saveNewStudy(): void {

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

                },
                error => {
                    console.log(error);
                });
        // this.findPatient();
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


    onChange($event) {

        if ($event != null) {
            this.selectedDNI = $event.dni;
            this.selectedNAME = $event.name;
            this.selectedLASTNAME = $event.lastname;
            this.selectedPatientsId = $event.id;
        } else {
            this.selectedDNI = null;
            this.selectedNAME = '';
            this.selectedLASTNAME = '';
            this.selectedPatientsId = null;
        }
    }
    onChangeStudy($event) {

        if ($event != null) {
            this.selectedStudyId = $event.id;

        } else {
            this.selectedStudyId = null;

        }
    }
    onChangeDoctor($event) {
        if ($event != null) {
            this.selectedDoctorId = $event.id;

        } else {
            this.selectedDoctorId = null;

        }
    }

    onChangeMachine($event) {
        if ($event != null) {
            this.selectedMachineId = $event.id;

        } else {
            this.selectedMachineId = null;

        }
    }
    onChangeHealth($event) {
        if ($event) {
            this.selectedHealth = $event.id;
        }
    }
    onRemoveHealth() {
        this.selectedHealth = null;
    }

}

