import { Component, OnInit } from '@angular/core';
import {StudiestypeService} from '../../../service/studiestype.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'newstudietype.component.html'
})
export class NewStudieTypeComponent implements OnInit {
    studiesType = {
        name: ''
    };
    
    studiesTypeid: '';

    constructor(
        private router: Router,
        private StudiestypeService: StudiestypeService) {}

    ngOnInit(): void {
    }

    saveStudiestype(): void {
        const data = {
            name: this.studiesType.name
             
        };

        this.StudiestypeService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                    this.studiesTypeid = response.id;
                    this.editarStudiesType(this.studiesTypeid);
                },
                error => {
                    console.log(error);

                });
    }
    editarStudiesType(id) {
        this.router.navigate(['/setup/editstudy/', id]);
    }
    volver() {
        this.router.navigate(['setup/studies']);
    }
}
