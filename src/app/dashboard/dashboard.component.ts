import { Component } from '@angular/core';
import { Hero } from '../heroInterface';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, public messageService: MessagesService) { }

  ngOnInit(){
    this.getTopHeroes();
  }

  getTopHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }
}
