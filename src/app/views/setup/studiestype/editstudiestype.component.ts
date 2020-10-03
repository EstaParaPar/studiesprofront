import { Component, OnInit} from '@angular/core';
import { StudiestypeService } from './../../../service/studiestype.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: 'editstudiestype.component.html'
})

export class EditstudiestypeComponent  implements OnInit {
    dataArray = [];
     id: string ;

    currentStudytype = null;
    message = '';

    constructor(
        private studiesTypeService: StudiestypeService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.message = '';
        this.getStudyType(this.route.snapshot.paramMap.get('id'));
    }

    getStudyType(id): void {
        this.studiesTypeService.getStudyType(id)
            .subscribe(
                data => {
                    this.currentStudytype = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }



    updateStudyType(): void {
        this.studiesTypeService.update(this.currentStudytype.id, this.currentStudytype)
            .subscribe(
                response => {
                    console.log(response);
                    this.message = 'El Estudio Fue Actualizado Correctamente ';
                },
                error => {
                    console.log(error);
                });
    }



    volver(): void {
      this.router.navigate(['/setup/studies']);
    }
}











  //---------



  /*

  constructor(
      private activatedRoute: ActivatedRoute,
      private studiesTypeService: StudiestypeService
      ) {}

    ngOnInit() {
       console.log('entro');
       this.id = this.activatedRoute.snapshot.params.id;

       this.studiesTypeService.getStudyType(this.id).subscribe((data: any[]) => {
        console.log(data);
        this.dataArray = data;
      });
    }




}*/
