import { Component, OnInit} from '@angular/core';
import { StudiesService } from './../../../../service/studies.service';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../../../service/token-storage.service';

@Component({
    templateUrl: 'pendingStudiesTech.component.html',
    styleUrls: ['pendingStudiesTech.component.css']
})
export class PendingStudiesTechComponent  implements OnInit {
    dataArray = [];
    currentUser: any;

    constructor(
      private router: Router,
      private studiesSeervice: StudiesService,
      private tokenStorageService: TokenStorageService,
  ) {}


    ngOnInit(): void {
        if (!this.tokenStorageService.isloggedin()) {
            this.router.navigate(['']);
        } else {
            this.init();
        }
    }
    init() {
      this.currentUser = this.tokenStorageService.getUser();
      this.studiesSeervice.getStudiesTechnician(this.currentUser.userId).subscribe((data: any[]) => {
        console.log(data);
        this.dataArray = data;
      });
    }

}
