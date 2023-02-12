import { Component } from '@angular/core';
import { Hero } from '../heroInterface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(){
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}
