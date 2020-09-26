import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  private roles: string;
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private router: Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;

      if (this.roles = 'Admin' ) {
        this.showAdminBoard =  true;
        // redirigir a showAdmin
        this.router.navigate(['dash_admin']);

      }
      if (this.roles = 'Doctor' ) {
        this.showModeratorBoard =  true;
      }



    }
  }

    logout(): void {
      this.tokenStorageService.signOut();
      window.location.reload();
  }
}
