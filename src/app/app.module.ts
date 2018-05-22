// default imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project's module imports
import { MaterialModule } from './material.module';
import { BoostrapModule } from './boostrap.module';
import { RouteModule } from './route.module';

import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BoostrapModule,
    RouteModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
