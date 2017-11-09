import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartComponent } from './echart.component';
import {EchartRoutingModule} from "./echart.routing";
import { AngularEchartsModule } from 'ngx-echarts';
@NgModule({
  imports: [
    EchartRoutingModule,
    CommonModule,
    AngularEchartsModule,

  ],
  declarations: [EchartComponent]
})
export class EchartModule { }
