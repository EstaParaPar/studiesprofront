import { Component, OnInit } from '@angular/core';
import {HealthInsuranceService} from './../../../service/healthinsurance.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'newhealthinsurance.component.html'
})
export class NewHealthInsuranceComponent implements OnInit {
    healthinsurance = {
        name: ''
    };


    constructor(
        private router: Router,
        private healthInsuranceService: HealthInsuranceService) {}

    ngOnInit(): void {
    }

    saveHealthinsurance(): void {
        const data = {
            name: this.healthinsurance.name
        };

        this.healthInsuranceService.create(data)
            .subscribe(
                response => {
                    console.log(response);

                },
                error => {
                    console.log(error);
                });
        this.volver();
    }
    volver() {
        this.router.navigate(['setup/healthins']);
    }
}
