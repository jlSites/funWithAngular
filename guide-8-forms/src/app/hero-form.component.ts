import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {
    powers = ['Weather Change', 'Super Hot', 'Hide and Seek'];
    model = new Hero(11, 'Alice', this.powers[1]);
    submitted = false;

    onSubmit(): void {
        this.submitted = true;
    }

    newHero(): void {
        this.model = new Hero(44, '', '');
    }

    // TODO: just for debug
    get diagnostic() {
        return JSON.stringify(this.model);
    }

}