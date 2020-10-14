import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { NewStudyComponent } from './newStudy/newStudy.component';
import { ConfirmStudyComponent } from './confirmStudy/confirmStudy.component';
import {  AllStudiesTechComponent } from './listStudiesTech/allStudies/allStudiesTech.component';
import {  PendingStudiesTechComponent } from './listStudiesTech/pendingStudies/pendingStudiesTech.component';
import { StudiesRoutingModule } from './studies-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule} from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditStudyComponent } from './editstudy/editStudy.component';
import { AllStudiesPayoutComponent } from './listStudiesDoctor/payout/allStudiesPayout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    StudiesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [
      NewStudyComponent,
      ConfirmStudyComponent,
      AllStudiesTechComponent,
      PendingStudiesTechComponent,
      EditStudyComponent,
      AllStudiesPayoutComponent
  ]
})
export class StudiesModule { }
