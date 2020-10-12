import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../service/token-storage.service';
import {StudiesService} from '../../service/studies.service';

@Component({
    templateUrl: 'dashboardUser.component.html'
})
export class DashboardUserComponent implements OnInit {


    constructor(
        private router: Router,
        private tokenStorageService: TokenStorageService,
        private studiesService: StudiesService) { }


    totalStudies = 0;
    pendingStudies = 0;
    confirmStudies = 0;
    finishStudies = 0;
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
        this.studiesService.getdashTech(this.currentUser.userId).subscribe((data: any[]) => {
            // console.log(data);
            this.currentDash = data;
            this.pendingStudies = this.currentDash.studiesPending;
            this.confirmStudies = this.currentDash.studiesConfirm;
            this.finishStudies = this.currentDash.studiesFinish;
            this.totalStudies = this.pendingStudies + this.confirmStudies + this.finishStudies;
            //  this.userList = data;
        });
    }

    newStudy() {
        this.router.navigate(['/studies/newstudy']);
    }
    liststudies() {
        this.router.navigate(['/studies/allstudiestech']);
    }
    pendingstudies() {
        this.router.navigate(['/studies/pendingstudiestech']);
    }
}
