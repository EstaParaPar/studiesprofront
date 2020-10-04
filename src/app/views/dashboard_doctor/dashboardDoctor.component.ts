import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { TokenStorageService } from '../../service/token-storage.service';
import { Router } from '@angular/router';
import {MachinesService} from '../../service/machines.service';
import { StudiestypeService } from '../../service/studiestype.service';
import { UserdataService } from '../../service/userdata.service';
import { HealthInsuranceService } from '../../service/healthinsurance.service';
import { PatientsService } from '../../service/patients.service';
import { NgOption } from '@ng-select/ng-select';
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
  patients = [] ;

    selectedCountries = [];
    selectedPatientsId: number;
    selectedDNI: number;
    selectedNAME: any;
    selectedLASTNAME: any;
    newPatient = false;


  constructor(
      private studiesTypeService: StudiestypeService,
      private machinesService: MachinesService,
      private userdataService: UserdataService,
      private healthInsuranceService: HealthInsuranceService,
      private patientsService:  PatientsService,
      private router: Router,
      private tokenStorageService: TokenStorageService) { }

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

    onChange = ($event: any): void => {
        console.log($event);
        if ($event != null ) {
            this.selectedDNI = $event.dni;
            this.selectedNAME =  $event.name;
            this.selectedLASTNAME =  $event.lastname;
        } else {
            this.selectedDNI = null ;
            this.selectedNAME =  '' ;
            this.selectedLASTNAME = '';
        }
    }


  init(): void {

    this.currentUser = this.tokenStorageService.getUser();
  }
  addPatient() {
      this.newPatient = true;
  }


}

