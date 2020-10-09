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
import { StudiesService } from '../../../service/studies.service';


@Component({
    templateUrl: 'confirmStudy.component.html'
})
export class ConfirmStudyComponent implements OnInit {

    currentStudy;
    currentUser;

    constructor(
        private router: Router,
        private tokenStorageService: TokenStorageService,
        private route: ActivatedRoute,
        private studiesService: StudiesService
    ) { }

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


    }

    getStudy(id): void {
        this.studiesService.getStudy(id)
            .subscribe(
                data => {
                    this.currentStudy  = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}


