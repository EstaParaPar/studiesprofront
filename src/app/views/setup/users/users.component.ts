import { Component, OnInit} from '@angular/core';
import { UserdataService } from '../../../service/userdata.service';


@Component({
  templateUrl: 'users.component.html'
})
export class UsersComponent  implements OnInit {
  dataArray = [];
  

  constructor(private userDataService: UserdataService) {}

    ngOnInit() {
      this.userDataService.getUsersData().subscribe((data: any[]) => {
       // console.log(data);
        this.dataArray = data;
      });
    }



}
