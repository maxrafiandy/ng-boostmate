// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// project imports
import { LoginComponent } from './pages/login/login.component';

// components to route
const routes: Routes = [
  // default route is an empty string
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
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

export class RouteModule { }
