import  {  Injectable } from '@angular/core';
import  { Hero }  from './hero';

import { Http,Headers} from  '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {

    private heroUrls = 'api/heroes';

   private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http:Http) {

    }

    getHeroes(): Promise<Hero[]> {

      return this.http.get(this.heroUrls).toPromise().then(response => response.json().data as Hero[])
        .catch(this.handleError);
    }

  create(name:string) : Promise<Hero> {
     return this.http.post(this.heroUrls,JSON.stringify({name:name}),{headers:this.headers}).toPromise().then(res => res.json().data as Hero)
       .catch(this.handleError);
  }

  delete(id : number ) : Promise<void> {
    const url = `${this.heroUrls}/${id}`;
    return this.http.delete(url,{headers:this.headers}).toPromise().then(() => null).catch(this.handleError);
  }

  update(hero:Hero) : Promise<Hero> {
    const url = `${this.heroUrls}/${hero.id}`;
    return this.http.put(url,JSON.stringify(hero),{headers:this.headers}).toPromise().then(()=>hero).catch(this.handleError);
  }

  getHero(id:number): Promise<Hero> {
    const url = `${this.heroUrls}/${id}`;
    return this.http.get(url).toPromise().then(response => response.json().data as Hero).catch(this.handleError);
  }

  private handleError(error:any) : Promise<any>{
    console.error('an error occured ', error);
    return Promise.reject(error.message || error );
  }

}
