import { Component, OnInit } from '@angular/core';
import {GroupPricesService} from './../../../service/groupPrices.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: 'editGroupPrices.component.html',
  styleUrls: ['editPrices.component.css']
})
export class EditPricesComponent implements OnInit {

  dataArray: any[];
  idGRP: string;

  constructor(private groupPrices: GroupPricesService,
              private router: Router,
              private route: ActivatedRoute) {}

    ngOnInit() {
      this.idGRP = this.route.snapshot.paramMap.get('id');
      this.groupPrices.getGroupPricesById(this.idGRP).subscribe((data: any[]) => {
       // console.log(data);
        this.dataArray = data;
      });
    }


    savePrices(): void {
    console.log(this.dataArray);
        this.groupPrices.update(this.idGRP, this.dataArray)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['setup/groupPrice']);
                },
                error => {
                    console.log(error);
                });
    }

    volver() {
        this.router.navigate(['setup/groupPrice']);
    }
}
