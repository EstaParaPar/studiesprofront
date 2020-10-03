// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MachinesComponent} from './machines/machines.component';
import { StudiestypeComponent } from './studiestype/studiestype.component';
import { UsersComponent } from './users/users.component';

import { SetupRoutingModule } from './setup-routing.module';
import {EditstudiestypeComponent} from './studiestype/editstudiestype.component';
import {HealthInsuranceComponent} from './healthinsurance/healthinsurance.component';
import {NewHealthInsuranceComponent} from './healthinsurance/newhealthinsurance.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SetupRoutingModule,


  ],
  declarations: [
      UsersComponent,
      MachinesComponent,
      StudiestypeComponent,
      EditstudiestypeComponent,
      HealthInsuranceComponent,
      NewHealthInsuranceComponent
  ]
})
export class SetupModule { }
