import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';


@Component({
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchItems = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) { }

    ngOnInit(): void {
        this.heroes = this.searchItems
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search item is same as previous
            .switchMap(term => term // switch to new observable each time
                // return the http search observable
                ? this.heroSearchService.search(term)
                //  or the observable of empty heroes if no search item
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    search(term: string) {
        // push a search item into the observable stream
        this.searchItems.next(term);
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}