import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {FormRoutingModule} from "./form.routing";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports: [
    NgZorroAntdModule.forRoot(),
    FormRoutingModule,
    CommonModule
  ],
  declarations: [FormComponent]
})
export class FormModule { }
