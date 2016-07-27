import { Component } from '@angular/core';

@Component({
    selector: 'little-tour',
    template: `
    <!-- the blur event binds to 2 template statements -->
    <input #newInput
      (keyup.enter)="addHero(newInput.value)"
      (blur)="addHero(newInput.value); newInput.value=''">

    <!--the template reference variable '#newInput' can be referred from any sibling or child of the <input> element -->
    <button (click)="addHero(newInput.value)">Add</button>
    <ul>
      <li *ngFor="let hh of heroes">{{hh}}</li>
    </ul>
    `
})
export class LittleTourComponent {
    heroes = ['Gary', 'Alice'];
    addHero(newHero: string): void {
        if (newHero) {
            // only add if not null or empty
            this.heroes.push(newHero);
        }
    }
}