import { Component, OnInit } from '@angular/core';
import {HealthInsuranceService} from './../../../service/healthinsurance.service';
import {Router} from '@angular/router';
import {GroupPricesService} from '../../../service/groupPrices.service';
import {TokenStorageService} from '../../../service/token-storage.service';

@Component({
    templateUrl: 'newhealthinsurance.component.html'
})
export class NewHealthInsuranceComponent implements OnInit {
    gpArray = [];
    selectedGPId: number;
    healthinsurance = {
        name: ''
    };

    validform = true;
    messageFormValid = 'completar todos los campos';


    constructor(
        private router: Router,
        private healthInsuranceService: HealthInsuranceService,
        private tokenStorageService: TokenStorageService,
        private groupPrices: GroupPricesService) {}

    ngOnInit(): void {
        if (!this.tokenStorageService.isloggedin()) {
            this.router.navigate(['']);
        } else {
            this.init();
            console.log(this.gpArray);
        }
    }

    init(): void {
        this.groupPrices.getGroupPrices().subscribe((data: any[]) => {
        // console.log(data);
        this.gpArray = data;
        //  this.userList = data;
    });
    }

    saveHealthinsurance(): void {
        this.validateform();
        if (this.validform) {
            const data = {
                name: this.healthinsurance.name,
                gpId: this.selectedGPId
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
    }

    validateform() {
        this.messageFormValid = 'completar todos los campos';
        let valid = true;
        if (this.selectedGPId == null) {
            valid = false;
        }
        if (this.healthinsurance.name == null || this.healthinsurance.name == "") {
            valid = false;
        }
        this.validform = valid;
    }
    volver() {
        this.router.navigate(['setup/healthins']);
    }

    onChangeGP($event) {
        if ($event) {
            this.selectedGPId = $event.id;

        }
    }
    onRemoveGP() {
        this.selectedGPId = null;

    }
}
