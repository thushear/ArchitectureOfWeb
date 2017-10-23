import {Attribute, Directive, HostBinding, HostListener, Input} from '@angular/core';


@Directive({
  selector: '[greet]'
})
export class GreetDirective {

  @Input() greet : string;

  @HostBinding() get innerText(){
    return this.greet;
  }

  @HostListener('click',['$event'])
  onClick(event){
    console.log(event);
    this.greet = 'clicked';
  }

  constructor(@Attribute('author') public author :string ) {
    console.log('author :' + author);
  }

}
