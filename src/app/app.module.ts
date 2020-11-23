import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { authInterceptorProviders } from './helpers/auth.interceptor';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/login/logout.component';


import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

// api service
import { HttpClientModule } from '@angular/common/http';
import { StudiestypeService } from './service/studiestype.service';
import { MachinesService } from './service/machines.service';
import { GroupPricesService } from './service/groupPrices.service';
import { HomeComponent } from './views/home/home.component';
import { HealthInsuranceService } from '@service/healthinsurance.service';
import { PatientsService } from '@service/patients.service';
import { ChangePasswordTopComponent } from './views/changepasswordtop/changepassword.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    ChangePasswordTopComponent,
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
      LogoutComponent,
    HomeComponent
  ],
  providers: [
    authInterceptorProviders,
    StudiestypeService,
    MachinesService,
    GroupPricesService,
    HealthInsuranceService,
    PatientsService,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
    }

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
