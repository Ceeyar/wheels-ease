import { SidebarModule } from 'ng-sidebar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    NavbarModule, WavesModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    SidebarModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
