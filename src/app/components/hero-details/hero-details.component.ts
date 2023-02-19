import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../hero.service';
import { Hero } from '../../heroInterface';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent {
  selectedHero: Hero | undefined;

  constructor(
    private heroServices: HeroService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){
    this.getHero();
  }

  getHero(): void{
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.selectedHero = this.heroServices.getHero(id);
  }

  goBack() {
    this.location.back();
  }

}
