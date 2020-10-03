import { Component, OnInit} from '@angular/core';
import { StudiestypeService } from './../../../service/studiestype.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'studiestype.component.html',
    styleUrls: ['studiestype.component.css']
})
export class StudiestypeComponent  implements OnInit {
  dataArray = [];
  constructor(
      private router: Router,
      private studiesTypeService: StudiestypeService) {}

    ngOnInit() {
      this.studiesTypeService.getStudiesType().subscribe((data: any[]) => {
        // console.log(data);
        this.dataArray = data;
      });
    }
    editStudy(id) {
        this.router.navigate(['setup/editstudy'], { queryParams: { id: id } });
    }

}
