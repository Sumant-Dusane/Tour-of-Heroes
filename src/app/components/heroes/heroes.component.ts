import { Component } from '@angular/core';
import { Hero } from '../../heroInterface';
import { HeroService } from '../../hero.service';
import { MessagesService } from '../../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, public messageService: MessagesService) { }

  ngOnInit(){
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
