import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../service/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private router: Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if (!this.tokenStorageService.isloggedin()) {
      this.router.navigate([''])
    } else {
      this.init()
    }
  }
  init():void{

    this.currentUser = this.tokenStorageService.getUser();
  }
  changePassword() {
    this.router.navigate(['/setup/changepassword']);

  }

}