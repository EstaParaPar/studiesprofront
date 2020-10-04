import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { TokenStorageService } from '../../service/token-storage.service';
import { Router } from '@angular/router';
import {MachinesService} from '../../service/machines.service';
import { StudiestypeService } from '../../service/studiestype.service';
import { UserdataService } from '../../service/userdata.service';

@Component({
  templateUrl: 'dashboardDoctor.component.html'
})
export class DashboardDoctorComponent implements OnInit {

    filterTerm: string;

    userRecords = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv"
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net"
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org"
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca"
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info"
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz"
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me"
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io"
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz"
        }
    ]

  dataArray = [];
  doctorArray = [];
  estudiosArray = [];
  currentUser: any;

  constructor(
      private studiesTypeService: StudiestypeService,
      private machinesService: MachinesService,
      private userdataService: UserdataService,
      private router: Router,
      private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if (!this.tokenStorageService.isloggedin()) {
      this.router.navigate(['']);
    } else {
      this.init();
    }

    this.machinesService.getMachines().subscribe((data: any[]) => {
      // console.log(data);
      this.dataArray = data;
    });

    this.userdataService.getDoctors().subscribe((data: any[]) => {
      // console.log(data);
      this.doctorArray = data;
    });

    this.studiesTypeService.getStudiesType().subscribe((estudios: any[]) => {
      // console.log(data);
       this.estudiosArray = estudios;
     });


  }

    
  init(): void{

    this.currentUser = this.tokenStorageService.getUser();
  }

}

