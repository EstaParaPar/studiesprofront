import { Component, OnInit } from '@angular/core';
import {MachinesService} from './../../../service/machines.service'

@Component({
  templateUrl: 'machines.component.html'
})
export class MachinesComponent implements OnInit {

  dataArray = [];
  constructor(private machinesService: MachinesService) {}

    ngOnInit() {
      this.machinesService.getMachines().subscribe((data: any[]) => {
       // console.log(data);
        this.dataArray = data;
      });
    }
}
