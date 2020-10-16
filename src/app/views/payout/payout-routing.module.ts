import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmedPayoutListComponent } from './Confirmedpayout/confirmedPayoutList.component';
import { DetailPayoutComponent } from './detailPayout/detailPayout.component';
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
      {
        path: 'confirmedPayout',
        component: ConfirmedPayoutListComponent,
        data: {
          title: 'confirmedPayout'
        }
      },
      {
        path: 'detailPayout/:id',
        component: DetailPayoutComponent,
        data: {
          title: 'detailPayout'
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
