import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import {GridRoutingModule} from "./grid.routing";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports: [
    CommonModule,
    GridRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [GridComponent]
})
export class GridModule { }
