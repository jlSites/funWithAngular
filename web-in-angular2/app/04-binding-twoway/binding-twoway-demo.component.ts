import {Component} from "@angular/core";

@Component({
    selector: 'binding-twoway-demo',
    template: `
        <div>{{hero.name}} details!</div>
        <div>
            <label>id:</label>{{hero.id}}
        </div>
        <div>
            <label>name:</label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
    `
})
export class BindingTwowayDemoComponent {
    hero: Hero = {id: 55, name: 'Batman'};
}

class Hero {
    id: number;
    name: string;
}