import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgZorroAntdModule} from "ng-zorro-antd";
import {AppRoutingModule} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AngularEchartsModule } from 'ngx-echarts';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    AngularEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
