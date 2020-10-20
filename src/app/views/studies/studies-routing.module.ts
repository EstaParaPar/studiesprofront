import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewStudyComponent } from './newStudy/newStudy.component';
import { ConfirmStudyComponent } from './confirmStudy/confirmStudy.component';
import {  AllStudiesTechComponent } from './listStudiesTech/allStudies/allStudiesTech.component';
import {  PendingStudiesTechComponent } from './listStudiesTech/pendingStudies/pendingStudiesTech.component';
import { EditStudyComponent } from './editstudy/editStudy.component';
import { AllStudiesPayoutComponent }  from './listStudiesDoctor/payout/allStudiesPayout.component'
import { StudiesPendingPayoutComponent } from './listStudiesDoctor/pendingPayout/StudiesPendingPayout.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'studies'
    },
    children: [
      {
        path: 'newstudy',
        component: NewStudyComponent,
        data: {
          title: 'newStudy'
        }
      },
      {
        path: 'confirmstudy/:id',
        component: ConfirmStudyComponent,
        data: {
          title: 'confirmStudy'
        }
      },
      {
        path: 'editstudy/:id',
        component: EditStudyComponent,
        data: {
          title: 'editStudy'
        }
      },
        {
        path: 'allstudiestech',
        component: AllStudiesTechComponent,
        data: {
          title: 'liststudies'
        }
      },
        {
          path: 'allstudiespayout/:id',
          component: AllStudiesPayoutComponent,
          data: {
            title: 'allstudiespayout'
          }
      },
        {
        path: 'pendingstudiestech',
        component: PendingStudiesTechComponent,
        data: {
          title: 'studiespending'
          }
      },
      {
        path: 'studiespendingpayout',
        component: StudiesPendingPayoutComponent,
        data: {
          title: 'studiespendingpayout'
          }
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiesRoutingModule {}
