import  {  Component }  from '@angular/core';

@Component({
  selector:'my-app',
  template:`
     <h1>{{title}}</h1>
     <nav>
     <a routerLink="/dashboard">dashboard</a>
     <a routerLink="/heroes">Heroes</a>     
     </nav>    
     <router-outlet></router-outlet>
  `
})

export class AppComponent{
  title = 'tour of heroes';
}
