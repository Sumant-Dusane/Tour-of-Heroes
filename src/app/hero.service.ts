import { Injectable } from '@angular/core';
import { Hero } from './heroInterface';
import { HEROES } from './data';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messgeService: MessagesService) { }

  getHeroes(): Hero[] {
    this.messgeService.add("MESSAGE SERVICE: fetched heroes data");
    return HEROES;
  }

  getHero(id: number): Hero {
    const hero = HEROES.find(h => h.id === id)!;
    return hero;
  }
}
