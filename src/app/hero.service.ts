import { Injectable } from '@angular/core';
import { Hero } from './heroInterface';
import { HEROES } from './data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }
  getHeroes(): Hero[] {
    return HEROES;
  }
}
