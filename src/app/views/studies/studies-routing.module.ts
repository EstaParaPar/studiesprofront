import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewStudyComponent } from './newStudy/newStudy.component';
import { ConfirmStudyComponent } from './confirmStudy/confirmStudy.component';


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
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiesRoutingModule {}
