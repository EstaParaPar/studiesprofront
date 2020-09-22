import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MachinesComponent} from '../setup/machines/machines.component';
import {StudiestypeComponent} from './studiestype/studiestype.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'setup'
    },
    children: [
      {
        path: '',
        redirectTo: 'machines'
      },
      {
        path: 'machines',
        component: MachinesComponent,
        data: {
          title: 'machines'
        }
      },
      {
        path: 'studies',
        component: StudiestypeComponent,
        data: {
          title: 'studies'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
