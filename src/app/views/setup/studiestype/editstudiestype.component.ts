import { Component, OnInit} from '@angular/core';
import { StudiestypeService } from './../../../service/studiestype.service';
import { ActivatedRoute, Router } from '@angular/router';
import {GroupPricesService} from './../../../service/groupPrices.service';


@Component({
  templateUrl: 'editstudiestype.component.html'
})

export class EditstudiestypeComponent  implements OnInit {
    dataArray: any[];
    studyData: any[];
    id: string;
    studytype: string;
    currentStudytype: string;

    message = '';

    constructor(
        private groupPrices: GroupPricesService,
        private studiesTypeService: StudiestypeService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.message = '';
        this.id = this.route.snapshot.paramMap.get('id');
        this.groupPrices.getGroupPricesByStudie(this.id).subscribe((data: any[]) => {

            //console.log(data);
            this.dataArray = data;
        });
        this.getStudieType();
    }

    getStudieType(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.studiesTypeService.getStudyType(this.id).subscribe((data: any[]) => {

            console.log(data);
            this.studyData = data;
        });
    
    }



    updateStudyType(): void {
        this.groupPrices.update(this.id, this.dataArray)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['setup/studies']);
                },
                error => {
                    console.log(error);
                });
    }


    volver(): void {
      this.router.navigate(['/setup/studies']);
    }
}









