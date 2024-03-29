import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDoctorComponent } from './dashboardDoctor.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardDoctorComponent,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardDoctorRoutingModule {}
