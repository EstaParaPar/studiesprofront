// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MachinesComponent} from './machines/machines.component';
import { StudiestypeComponent } from './studiestype/studiestype.component';
import { UsersComponent } from './users/users.component';
import { NewuserComponent } from './newuser/newuser.component';

import { SetupRoutingModule } from './setup-routing.module';
import {EditstudiestypeComponent} from './studiestype/editstudiestype.component';
import {HealthInsuranceComponent} from './healthinsurance/healthinsurance.component';
import {NewHealthInsuranceComponent} from './healthinsurance/newhealthinsurance.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { ChangePasswordComponent } from './changePassword/changepass.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SetupRoutingModule,
    NgSelectModule,

  ],
  declarations: [
      UsersComponent,
      NewuserComponent,
      MachinesComponent,
      StudiestypeComponent,
      EditstudiestypeComponent,
      HealthInsuranceComponent,
      NewHealthInsuranceComponent,
      ChangePasswordComponent
  ]
})
export class SetupModule { }
