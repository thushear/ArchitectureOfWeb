import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {CardRoutingModule} from "./card.routing";
import {NgZorroAntdModule} from "ng-zorro-antd";


@NgModule({
  imports: [
    CommonModule,
    CardRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [CardComponent]
})
export class CardModule { }
