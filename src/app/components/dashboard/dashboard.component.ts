import { Component, OnInit } from '@angular/core';
import { Hero } from '../../heroInterface';
import { HeroService } from '../../hero.service';
import { MessagesService } from '../../messages.service';
import { Store } from '@ngrx/store';
import { addHeroDetail } from '../../heroes-state/hero-action.action';
import { Observable } from 'rxjs';
import { Heroes } from 'src/app/heroes-state/hero-state.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  heroName: string = '';
  heroes: Hero[] = [];
  heroes$: Observable<Hero[]> | null = null;


  constructor(private heroService: HeroService, public messageService: MessagesService, private store: Store<Heroes>) { }

  ngOnInit(){
    // this.store.select(selectHeroState).subscribe((hero) => {
    //   this.heroes$ = hero;
    // });
    this.heroes$ = this.store.select(store => store.hero);
    this.heroes$.subscribe((hero) => this.heroes = hero);
  }

  // store.select(selecSeoGroupSubFooter).subscribe((subFooter) => {
  //   if (!subFooter.isSubFooterLoaded && subFooter.type) {
  //     switch (subFooter.type) {
  //       case SEO_GROUP_SUBFOOTER:
  //         subFooter.id && store.dispatch(getSeoGroupSubFooter({targetId: subFooter.id, pathname: this.currentPathName}));
  //         break;
  //       case PAGE_SEO_SUBFOOTER:
  //         store.dispatch(getPageSeo({pathname: this.currentPathName}));
  //         break;
  //       default:
  //         store.dispatch(getPageSeo({pathname: this.currentPathName}));
  //         break;
  //     }
  //   }
  //   else if (subFooter.data.length > 0) {
  //     this.isSubFooterPresent = true;
  //     this.subFooterData = subFooter.data;
  //     this.transferState.set(this.subFooterKey, subFooter.data);
  //   }
  // });

  addHeroes(name: String): void {
    const newHero = {
      id: Date.now(),
      name: name
    } as Hero;
    this.store.dispatch(addHeroDetail({payload: newHero}));
    console.log(this.heroes);
  }

  // getTopHeroes(): void {
  //   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 5));
  // }
}
