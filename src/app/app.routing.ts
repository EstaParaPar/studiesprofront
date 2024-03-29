import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { ChangePasswordTopComponent } from './views/changepasswordtop/changepassword.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/login/logout.component';




export const routes: Routes = [
  {
    path: 'dash_admin',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dash_doctor',
    redirectTo: 'dashboardDoctor',
    pathMatch: 'full',
  },
  {
    path: 'dash_tecnico',
    redirectTo: 'dashboardUser',
    pathMatch: 'full',
  },
  {
    path: 'changepassword',
    component: ChangePasswordTopComponent,
    data: {
      title: 'changepassword'
    }
  },
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
    {
        path: 'logout',
        component: LogoutComponent,
        data: {
            title: 'Logout Page'
        }
    },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },

  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'studies',
        loadChildren: () => import('./views/studies/studies.module').then(m => m.StudiesModule)
      },
      {
        path: 'setup',
        loadChildren: () => import('./views/setup/setup.module').then(m => m.SetupModule)
      },
      {
        path: 'payout',
        loadChildren: () => import('./views/payout/payout.module').then(m => m.PayoutModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'dashboardDoctor',
        loadChildren: () => import('./views/dashboard_doctor/dashboardDoctor.module').then(m => m.DashboardDoctorModule)
      },
        {
        path: 'dashboardUser',
        loadChildren: () => import('./views/dashboard_user/dashboardUser.module').then(m => m.DashboardUserModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule)
      }


    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
