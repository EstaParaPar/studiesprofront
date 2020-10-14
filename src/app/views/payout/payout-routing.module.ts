import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPayoutComponent } from './newpayout/newPayout.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'studies'
    },
    children: [
      {
        path: 'newPayout',
        component: NewPayoutComponent,
        data: {
          title: 'newPayout'
        }
      },
     
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutRoutingModule {}
