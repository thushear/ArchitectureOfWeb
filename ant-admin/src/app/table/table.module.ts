import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {TableRoutingModule} from "./table.routing";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [TableComponent]
})
export class TableModule { }
