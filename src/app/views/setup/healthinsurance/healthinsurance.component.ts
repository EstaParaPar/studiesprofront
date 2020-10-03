import { Component, OnInit } from '@angular/core';
import {HealthInsuranceService} from './../../../service/healthinsurance.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'healthinsurance.component.html',
    styleUrls: ['healthinsurance.component.css']


})
export class HealthInsuranceComponent implements OnInit {

  dataArray = [];
  constructor(
      private router: Router,
      private healthInsuranceService: HealthInsuranceService) {}

    ngOnInit() {
      this.healthInsuranceService.getHealthInsurance().subscribe((data: any[]) => {
        console.log(data);
        this.dataArray = data;
      });
    }
}
