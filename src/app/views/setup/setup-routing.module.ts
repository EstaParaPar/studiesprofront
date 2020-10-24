import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MachinesComponent} from '../setup/machines/machines.component';
import { StudiestypeComponent } from './studiestype/studiestype.component';
import { UsersComponent } from './users/users.component';
import {EditstudiestypeComponent} from './studiestype/editstudiestype.component';
import {HealthInsuranceComponent} from './healthinsurance/healthinsurance.component';
import {NewHealthInsuranceComponent} from './healthinsurance/newhealthinsurance.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ChangePasswordComponent } from './changePassword/changepass.component';

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
      },
        {
        path: 'healthins',
        component: HealthInsuranceComponent,
        data: {
          title: 'healthins'
        }
      },
        {
        path: 'newhealthins',
        component: NewHealthInsuranceComponent,
        data: {
          title: 'newhealth'
        }
      },
        {
            path: 'editstudy/:id',
            component: EditstudiestypeComponent,
            data: {
                title: 'full'
            }
        },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'users'
        }
      },
      {
        path: 'newuser',
        component: NewuserComponent,
        data: {
          title: 'newusers'
        }
      },
        {
          path: 'changepassword',
          component: ChangePasswordComponent,
          data: {
            title: 'changepassword'
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
