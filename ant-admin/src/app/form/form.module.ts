import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form.component';
import {FormRoutingModule} from "./form.routing";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormAdvancedComponent} from "./form-advanced.component";

@NgModule({
  imports: [
    FormRoutingModule,
    CommonModule, ReactiveFormsModule, FormsModule, NgZorroAntdModule
  ],
  declarations: [FormComponent,FormAdvancedComponent]
})
export class FormModule {
}
