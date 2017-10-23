import  {Component, Inject}  from '@angular/core';
import {SimpleServiceService} from "./simple/simple-service.service";

@Component({
  selector:'my-app',
  template:`
     <h1>{{title}}</h1>
     <nav>
     <a routerLink="/dashboard">dashboard</a>
     <a routerLink="/heroes">Heroes</a>
       <a routerLink="/ngx">ngx</a>
       <a routerLink="/bootstrap">bootstrap</a>
     </nav>    
     <!--<app-simple *ngFor="let m of service.message" [message]="m"  (update)="onUpdate($event.text)"></app-simple>-->
     <!--<ul>-->
       <!--<li *ngFor="let m of service.message;index as i; ">-->
          <!--{{ i }} -&#45;&#45; {{m}}  -->
       <!--</li>-->
     <!--</ul>-->
     <router-outlet></router-outlet>
  `
})

export class AppComponent{
  title = 'tour of heroes';


  constructor(  private service : SimpleServiceService ) {
  }

  onUpdate(text : string) : void {
     console.log(text);
  }

}
