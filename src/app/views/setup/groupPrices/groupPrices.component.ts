import { Component, OnInit } from '@angular/core';
import {GroupPricesService} from './../../../service/groupPrices.service';

@Component({
  templateUrl: 'groupPrices.component.html'
})
export class GroupPricesComponent implements OnInit {

  dataArray = [];
  constructor(private groupPrices: GroupPricesService) {}

    ngOnInit() {
      this.groupPrices.getGroupPrices().subscribe((data: any[]) => {
       // console.log(data);
        this.dataArray = data;
      });
    }
}
