import {Component, Input} from "@angular/core";

@Component({
    selector: 'best-fruit',
    template: `
        <div>The best fruit in the world is <span class="best">{{bestFruit}}</span></div>
    `,
    styles: [`
        .best {
            background-color: blueviolet;
        }
    `]
})
export class BestFruitComponent {
    @Input()
    bestFruit = 'Blah';
}