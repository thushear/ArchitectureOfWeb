/**
 * Created by kongming on 2017/10/24.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-detector-parent',
  template: `
    <app-change-detector-child [text]="name"></app-change-detector-child>
    <button (click)="change();$event.stopPropagation();">change</button>`,
  styleUrls: ['./change-detector.component.css']
})
export class ChangeDetectorParentComponent implements OnInit {

  name = "hello";

  constructor() {
  }

  ngOnInit() {
  }

  change(): void {
    this.name = "change";
  }
}
