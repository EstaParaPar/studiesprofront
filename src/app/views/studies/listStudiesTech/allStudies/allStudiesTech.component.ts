import { Component, OnInit, TemplateRef} from '@angular/core';
import { StudiesService } from './../../../../service/studies.service';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../../../service/token-storage.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
    templateUrl: 'allStudiesTech.component.html',
    styleUrls: ['allStudiesTech.component.css']
})
export class AllStudiesTechComponent  implements OnInit {
    dataArray = [];
  currentUser: any;
  modalRef: BsModalRef;

    constructor(
      private router: Router,
      private studiesService: StudiesService,
      private tokenStorageService: TokenStorageService,
      private modalService: BsModalService
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
      this.studiesService.getStudiesTechnician(this.currentUser.userId).subscribe((data: any[]) => {
        console.log(data);
        this.dataArray = data;
      });
  }
  confirmStudy(id): void {
    console.log("entro a la llamada");
    this.studiesService.confirmStudy(id)
    .subscribe(
        response => {
            console.log(response);
        this.ngOnInit();
            //this.router.navigate([ruta]);
        },
        error => {
            console.log(error);
        });
  }
  openModal(template:TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{class:'modal-sm'})
}

confirm(id): void{
    this.modalRef.hide();
        this.studiesService.deleteStudy(id)
        .subscribe(
            response => {
                console.log(response);
            this.ngOnInit();

            },
            error => {
                console.log(error);
            });
}

decline(): void{
    this.modalRef.hide();
}

}
