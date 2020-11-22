import { Component, OnInit } from '@angular/core';
import {GroupPricesService} from './../../../service/groupPrices.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'editGroupPrices.component.html'
})
export class EditPricesComponent implements OnInit {

  dataArray: any[];

  constructor(private groupPrices: GroupPricesService,
              private route: ActivatedRoute) {}

    ngOnInit() {
      const idGRP = this.route.snapshot.paramMap.get('id')
      this.groupPrices.getGroupPricesById(idGRP).subscribe((data: any[]) => {
       // console.log(data);
        this.dataArray = data;
      });
    }
    savePrices(){
      console.log(this.dataArray);
    }
}
