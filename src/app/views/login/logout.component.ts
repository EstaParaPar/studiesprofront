import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../service/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  isForgotPass = false;
  errorMessage = '';
  roles: '';
  constructor( private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorage.getToken();

      if (!this.isLoggedIn) {
        this.router.navigate(['']);
      }
  }

    reloadPage(): void {
        window.location.reload();
    }

  volver() {
     this.reloadPage();
  }
 logout() {

     this.tokenStorage.signOut();
     this.router.navigate(['']);

 }


}