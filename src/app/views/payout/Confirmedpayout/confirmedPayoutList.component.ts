import { Component, OnInit} from '@angular/core';
import { StudiesService } from '../../../service/studies.service';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../../service/token-storage.service';

@Component({
    templateUrl: 'confirmedPayoutList.component.html',
    styleUrls: ['confirmedPayoutList.component.css']
})
export class ConfirmedPayoutListComponent  implements OnInit {
    dataArray = [];
    currentUser: any;

    constructor(
      private router: Router,
      private studiesService: StudiesService,
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
      console.log  ("init de GetListPayout");
      this.currentUser = this.tokenStorageService.getUser();

      this.studiesService.getPayoutList(this.currentUser.userId).subscribe((data: any[]) => {
      console.log(data);
      console.log("creando listado");
      this.dataArray = data;
    });
    }

}
