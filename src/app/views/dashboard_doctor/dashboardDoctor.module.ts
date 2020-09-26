import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DashboardDoctorComponent } from './dashboardDoctor.component';
import { DashboardDoctorRoutingModule } from './dashboardDoctor-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardDoctorRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardDoctorComponent ]
})
export class DashboardDoctorModule { }
