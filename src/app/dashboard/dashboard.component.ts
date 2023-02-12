import { Component } from '@angular/core';
import { Hero } from '../heroInterface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(){
    this.heroes = this.heroService.getHeroes().slice(0, 4);
  }
}
