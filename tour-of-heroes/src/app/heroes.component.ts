import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // by Promise
    this.heroService.getHeroes().then(hh => this.heroes = hh);
    // by Promise with slow response callback
    //this.heroService.getHeroesSlowly().then(hh => this.heroes = hh);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) { return; }
    this.heroService.create(heroName)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        // remove the hero from the array
        this.heroes = this.heroes.filter(h => h !== hero);

        // clear the selected
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

}