import { Component, OnInit} from '@angular/core';
import { StudiestypeService } from './../../../service/studiestype.service';

@Component({
  templateUrl: 'studiestype.component.html'
})
export class StudiestypeComponent  implements OnInit {
  dataArray = [];
  constructor(private studiesTypeService: StudiestypeService) {}

    ngOnInit() {
      this.studiesTypeService.getStudiesType().subscribe((data: any[]) => {
       // console.log(data);
        this.dataArray = data;
      });
    }



}
