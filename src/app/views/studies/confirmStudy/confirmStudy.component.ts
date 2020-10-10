import {Component, OnInit,TemplateRef} from '@angular/core';
import {TokenStorageService} from '../../../service/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import { StudiesService } from '../../../service/studies.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'


@Component({
    templateUrl: 'confirmStudy.component.html'
})
export class ConfirmStudyComponent implements OnInit {

    currentStudy;
    currentUser;
    modalRef: BsModalRef;

    constructor(
        private router: Router,
        private tokenStorageService: TokenStorageService,
        private route: ActivatedRoute,
        private studiesService: StudiesService,
        private modalService: BsModalService
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
    confirmStudy(): void {
        const id = this.currentStudy.id;
        this.studiesService.confirmStudy(id)
        .subscribe(
            response => {
                console.log(response);
                this.ngOnInit();

            },
            error => {
                console.log(error);
            });
    }
    editStudy(): void{
        const id = this.currentStudy.id;
        const ruta = '/studies/editstudy/' + id;
        this.router.navigate([ruta]);
    }

    openModal(template:TemplateRef<any>) {
        this.modalRef = this.modalService.show(template,{class:'modal-sm'})
    }

    confirm(): void{
        this.modalRef.hide();
            const id = this.currentStudy.id;
            this.studiesService.deleteStudy(id)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['/studies/allstudiestech']);
    
                },
                error => {
                    console.log(error);
                });
    }

    decline(): void{
        this.modalRef.hide();
    }
}
