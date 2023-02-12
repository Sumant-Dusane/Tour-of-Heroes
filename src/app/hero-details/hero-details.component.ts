import { Component, Input } from '@angular/core';
import { Hero } from '../heroInterface';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent {
  @Input() selectedHero?: Hero;

}
