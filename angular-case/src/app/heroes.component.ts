import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService }  from './hero.service';
import { Router } from '@angular/router';



@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})



export class HeroesComponent implements OnInit{
  title = 'my first angular app';
  heros : Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }


  constructor(private heroService : HeroService,private router : Router) {

  }

  delete(hero : Hero) : void {
     this.heroService.delete(hero.id).then(()=> {
         this.heros = this.heros.filter(h => h !== hero);
         if(this.selectedHero == hero) { this.selectedHero == null;}
     } )
  }

  add(name:string) : void {
     name = name.trim();
     if(!name) {return;}
     this.heroService.create(name).then(hero => {
         this.heros.push(hero);
         this.selectedHero = null;
     })
  }

  getHeros() : void{
    this.heroService.getHeroes().then(heroes => this.heros = heroes);
  }
    ngOnInit():void {

      this.getHeros();
    }

  goToDetail():void {
     this.router.navigate(['/detail',this.selectedHero.id])
  }


}
