// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// project imports
import { LoginPage } from './pages/login/login.page';
import { AdminPage } from './pages/admin/admin.page';
import { UserComponent } from './components/user/user.component';

// components to route
const routes: Routes = [
  { path: '', component: LoginPage },

  { path: 'login', component: LoginPage },

  {
    path: 'admin',
    component: AdminPage,
    children: [
      { path: 'user', component: UserComponent }
    ]
  }
];

export const routingComponents = [
  LoginPage,
  AdminPage,
  UserComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ],

  declarations: []
})

export class RoutingModule { }
