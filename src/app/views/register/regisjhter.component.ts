import { Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';


@Component({
    templateUrl: 'newuser.component.html'
})
export class NewuserComponent  implements OnInit {

    form: any = {
        username: '',
        name: '',
        lastname: ''
    };
    roles = [
        'Tecnico',
        'Doctor'
    ]
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    selectedRole = '';

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {


    }

    onSubmit(): void {
        let userData;


        userData = {
            role: this.selectedRole,
            password: this.form.name + '1234',
            username: this.form.username,
            name: this.form.name,
            lastname: this.form.lastname,
        };

        this.authService.register(userData).subscribe(
            (data: any[]) => {
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