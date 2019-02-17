import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }      from './login/login.component';
import { WriteComponent }      from './write/write.component';
import { ConnectComponent }      from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '', 
    component: DashboardComponent,
    children: [
        {
          path: 'write',
          component: WriteComponent
        },
        {
          path: 'connect',
          component: ConnectComponent
        },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
