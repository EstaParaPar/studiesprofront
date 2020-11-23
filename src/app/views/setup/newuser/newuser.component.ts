import { Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';


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

    constructor(private authService: AuthService,
    private router: Router) {
    }

    ngOnInit(): void {


    }

    onSubmit(): void {
        let userData;

        this.isSignUpFailed = false;
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
                this.router.navigate(['/setup/users']);
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