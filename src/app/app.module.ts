// default import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,
  ReactiveFormsModule } from '@angular/forms';

// project's modules import
import { MaterialModule } from './material.module';
import { BoostrapModule } from './boostrap.module';
import { RoutingModule,
  routingComponents } from './routing.module';

// project's components import
import { AppComponent } from './app.component';

// project's services import
import { AuthService } from './services/auth.service';

// third parties import
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BoostrapModule,
    AngularFontAwesomeModule,
    RoutingModule
  ],

  providers: [
    AuthService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
