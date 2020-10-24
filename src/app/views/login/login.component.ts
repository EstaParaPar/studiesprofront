import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { TokenStorageService } from '../../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  isForgotPass = false;
  errorMessage = '';
  roles: '';
  changePass = false;
  
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router) { }
  currentUser = this.tokenStorage.getUser();
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().role;
      this.reloadPage(); 
    } 
    
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      
      data => {
        this.changePass = data.changePassword;
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().role;

        if (this.changePass) {
          this.router.navigate(['/changepassword']);
        } else {
          this.reloadPage();
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
  forgotPass() {
    this.isForgotPass = true;
  }

  log(data): void {
    console.log(data);
    console.log(this.roles);
    console.log(this.tokenStorage.getUser());
    console.log(this.tokenStorage.getToken());
  }
}