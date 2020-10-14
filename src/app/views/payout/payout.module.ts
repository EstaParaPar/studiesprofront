import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PayoutRoutingModule } from './payout-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule} from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NewPayoutComponent } from './newpayout/newPayout.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    PayoutRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [
    NewPayoutComponent

  ]
})
export class PayoutModule { }
