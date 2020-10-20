import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: '',
    name: '',
    lastname: ''
  };
  roles= [
     "Tecnico",
     "Doctor",
  ]
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  selectedRole = "";
  userData = [];
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    
  }

  onSubmit(): void {
    let userData;


    userData = {
      role:this.selectedRole,
      password:this.form.name + "1234",
      username: this.form.username,
      name : this.form.name,
      lastname : this.form.lastname,
    }; 
    const data = userData;

    this.authService.register(data).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  onChangeRole($event) {
    if ($event) {
        this.selectedRole = $event;
      console.log(this.selectedRole);
    }
}
}