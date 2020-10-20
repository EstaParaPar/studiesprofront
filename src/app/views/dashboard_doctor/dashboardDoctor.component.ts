import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../service/token-storage.service';
import {StudiesService} from '../../service/studies.service';

@Component({
    templateUrl: 'dashboardDoctor.component.html'
})
export class DashboardDoctorComponent implements OnInit {


    constructor(
        private router: Router,
        private tokenStorageService: TokenStorageService,
        private studiesService: StudiesService) { }


    totalStudies = 0;
    pendingStudies = 0;
    totalliquitadiones = 0;
    currentUser;
    currentDash;


    ngOnInit(): void {
        if (!this.tokenStorageService.isloggedin()) {
            this.router.navigate(['']);
        } else {
            this.init();
        }
    }
    init(): void {
        this.currentUser = this.tokenStorageService.getUser();
        this.studiesService.getdashDoctor(this.currentUser.userId).subscribe((data: any[]) => {
            console.log(data);
            this.currentDash = data;
            this.totalliquitadiones = this.currentDash.totalPayOut;
            this.pendingStudies = this.currentDash.studiesPending;
        });
    }

    newPayOut() {
        this.router.navigate(['/payout/newPayout']);
    }
    liststudies() {
        this.router.navigate(['/studies/studiespendingpayout']);
    } listliquidaciones() {
        this.router.navigate(['/payout/confirmedPayout']);
    }

}
