import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import  {DashboardComponent} from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import {  HeroDetailComponent } from  './hero-detail.component';
import { SimpleComponent } from './simple/simple.component';
// import {NgxComponent} from "./ngx/ngx.component";
import {BootstrapComponent} from "./bootstrap/bootstrap.component";
import {FormComponent} from "./form/form.component";
const routes : Routes = [
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  }
  ,{
    path:'heroes',
    component:HeroesComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'detail/:id',
    component:HeroDetailComponent
  },
  {
    path : 'simple',
    component : SimpleComponent
  },
  // {
  //   path : 'ngx',
  //   component : NgxComponent
  // },
  {
    path : 'bootstrap',
    component : BootstrapComponent
  },
  {
    path : 'form',
    component : FormComponent
  }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})



export class AppRoutingModule {


}
