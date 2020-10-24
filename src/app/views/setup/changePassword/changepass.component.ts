import { Component, OnInit} from '@angular/core';
import { TokenStorageService } from '../../../service/token-storage.service';
import {AuthService} from '../../../service/auth.service';
import { Router } from '@angular/router';


@Component({
    templateUrl: 'changepass.component.html'
})
export class ChangePasswordComponent  implements OnInit {

    form: any = {
        oldPassword:'',
        password: '',
        passwordConfirmed: ''
    };
    isSuccessful = false;
    isSignUpFailed = false;
    msgValid = '';

    constructor(private tokenStorage: TokenStorageService, private authService: AuthService,private router: Router) { }
    currentUser;

    ngOnInit(): void {
        this.currentUser = this.tokenStorage.getUser();

    }
    validateForm(): boolean {
        var formValid = true;
        this.msgValid = "";
        if (this.form.oldPassword == "") {
            formValid = false;
            this.msgValid = " - Debe ingresar la contraseña";
        } if (this.form.passwordConfirmed !== this.form.password) {
            formValid = false;
            this.msgValid = this.msgValid+" - Las contraseñas deben coincidir";
        } if (this.form.password == "") {
            formValid = false;
            this.msgValid = this.msgValid+" - Debe ingresar una nueva contraseña";
        } if (this.form.password.length < 8) {
            formValid = false;
            this.msgValid = this.msgValid + " -  La contraseña debe tener mas de 8 caracteres";
        }
        this.isSignUpFailed = !formValid;
        console.log(formValid);
        return formValid;
    } 

    onSubmit(): void {
        let userData;
        let id = this.currentUser.userId;
        var validate = this.validateForm();
        if (validate) {
        userData = {
            oldPassword: this.form.oldPassword, 
            newPassword: this.form.passwordConfirmed

        };

        this.authService.passwordChange(userData).subscribe(
            (data: any[]) => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                window.location.reload();
            },
            err => {
                this.msgValid = err.error.message;
                this.isSignUpFailed = true;
            }
            );
        }
    }
}