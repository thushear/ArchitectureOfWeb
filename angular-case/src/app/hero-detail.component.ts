import  { Component, Input , OnInit} from '@angular/core';
import  { Hero } from './hero'
import  { ActivatedRoute, ParamMap } from '@angular/router';
import  { Location } from '@angular/common';
import  { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector:'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click)="save()">Save</button>
     <button (click)="goBack()">Back</button>
    </div>
  `,
  styleUrls:['./hero-detail.css']
})

export class HeroDetailComponent implements OnInit{
   @Input() hero: Hero;


  constructor(private heroService:HeroService,private location:Location, private route:ActivatedRoute ) {

  }


    ngOnInit():void {

      this.route.paramMap.switchMap((params:ParamMap)=> this.heroService.getHero(+params.get('id'))).subscribe(hero=> this.hero = hero);
    }

  save() : void {
      this.heroService.update(this.hero).then( () => this.goBack());
  }


  goBack():void{
    this.location.back();
  }
}
