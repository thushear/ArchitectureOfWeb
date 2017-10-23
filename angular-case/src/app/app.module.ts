import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';
import  { HeroDetailComponent } from './hero-detail.component';

import { AppRoutingModule } from './app-routing.module';

import  { AppComponent } from './app.component';
import  { HeroService }  from './hero.service';
import  { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HttpModule } from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { SimpleComponent } from './simple/simple.component';
import {SimpleServiceService} from "./simple/simple-service.service";
import { GreetDirective } from './greet.directive';
import {NgZorroAntdModule} from "ng-zorro-antd";
// import { NgxComponent } from './ngx/ngx.component';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    SimpleComponent,
    GreetDirective,
    // NgxComponent,
    BootstrapComponent,
    FormComponent
  ],
  imports: [

    HttpModule,
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [HeroService, SimpleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
