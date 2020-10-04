import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { TokenStorageService } from '../../service/token-storage.service';
import { Router } from '@angular/router';
import {MachinesService} from '../../service/machines.service';
import { StudiestypeService } from '../../service/studiestype.service';
import { UserdataService } from '../../service/userdata.service';
import { HealthInsuranceService } from '../../service/healthinsurance.service';

@Component({
  templateUrl: 'dashboardDoctor.component.html'
})
export class DashboardDoctorComponent implements OnInit {


  dataArray = [];
  dataHealthIn = [];
  doctorArray = [];
  estudiosArray = [];
  currentUser: any;

  constructor(
      private studiesTypeService: StudiestypeService,
      private machinesService: MachinesService,
      private userdataService: UserdataService,
      private healthInsuranceService: HealthInsuranceService,
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
      this.dataArray = data;
    });
    this.healthInsuranceService.getHealthInsurance().subscribe((data: any[]) => {
      // console.log(data);
      this.dataHealthIn = data;
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

    
  init(): void{

    this.currentUser = this.tokenStorageService.getUser();
  }

}

