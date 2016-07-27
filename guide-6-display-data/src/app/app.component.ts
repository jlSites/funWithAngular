import { Component } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(11, 'Gary'),
    new Hero(22, 'Alice'),
    new Hero(33, 'Helen'),
    new Hero(44, 'Martins')
  ];
  moreLimit = 3;
  myHero = this.heroes[2];

  hasMore(): boolean {
    return this.heroes.length > this.moreLimit;
  }

  debugMe(): string {
    return JSON.stringify(this.heroes);
  }
}
