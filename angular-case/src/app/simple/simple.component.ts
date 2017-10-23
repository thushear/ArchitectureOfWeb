import {
  Component, Input, OnInit, Output, EventEmitter, AfterViewInit, TemplateRef, ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit,AfterViewInit {

  versions = ['1.x','2.x','4.x'];

   username  = "thushear";

  @ViewChild('tpl')
  private tplRef : TemplateRef<any>;

  ngAfterViewInit(): void {
    this.vcRef.createEmbeddedView(this.tplRef);
  }

  isMousedown : boolean = true;

  @Input() message : string;

  @Output() update = new EventEmitter<{text:string}>();

  constructor(private vcRef : ViewContainerRef) {

  }

  ngOnInit() {
  }

  onSubmit(value){
    console.dir(value);
    console.dir(JSON.stringify(value));
  }

  onClick(event,value):void {
    console.log(event);
    console.log(value);
  }

}
