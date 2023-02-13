import { Injectable } from '@angular/core';
import { Hero } from './heroInterface';
import { HEROES } from './data';
import { MessagesService } from './messages.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messgeService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    let heroes = of(HEROES);
    this.messgeService.add("MESSAGE SERVICE: fetched heroes data");
    return heroes;
  }

  getHero(id: number): Hero {
    const hero = HEROES.find(h => h.id === id)!;
    return hero;
  }
}
