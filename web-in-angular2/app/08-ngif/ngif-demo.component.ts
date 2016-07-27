import {Component} from "@angular/core";

@Component({
    selector: 'ngif-demo',
    template: `
        <div>
            <p *ngIf="hasFruits()">There are {{fruits.length}} fruits today: {{fruits}}</p>
            <button (click)="onEatMe()" *ngIf="hasFruits()">Eat me</button>
            <span *ngIf="!hasFruits()">No more fruits!</span>
        </div>
    `
})
export class NgIfDemoComponent {
    fruits = ['Tomato', 'Potato', 'Avocado']

    onEatMe() {
        this.fruits.pop();
    }

    hasFruits() {
        return this.fruits.length > 0;
    }
}