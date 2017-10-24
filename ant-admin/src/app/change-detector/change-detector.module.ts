import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorComponent } from './change-detector.component';
import {ChangeDetectorRoutingModule} from "./change-detector.routing";
import {ChangeDetectorChildComponent} from "./change-detector-child.component";
import {ChangeDetectorParentComponent} from "./change-detector-parent.component";

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectorRoutingModule
  ],
  declarations: [ChangeDetectorComponent,ChangeDetectorChildComponent,ChangeDetectorParentComponent]
})
export class ChangeDetectorModule { }
