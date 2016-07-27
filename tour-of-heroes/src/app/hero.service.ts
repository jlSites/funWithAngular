import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// only for mock data
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes'; // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    // from mock
    getHeroesByMock(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    // from mock
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(rr => {
            // Simulate server latency with 2 second delay
            setTimeout(() => rr(this.getHeroes()), 2000);
        });
    }

    // from mock
    getHeroByMock(id: number): Promise<Hero> {
        return this.getHeroesByMock().then(heroes => heroes.find(hh => hh.id == id));
    }


    // from http
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    // from http
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    // from http
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(heroName: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: heroName }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}