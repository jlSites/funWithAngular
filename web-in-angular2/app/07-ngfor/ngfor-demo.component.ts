import {Component} from "@angular/core";

@Component({
    selector: 'ngfor-demo',
    template: `
        <div>
            <p>There are {{fruits.length}} fruits today:</p>
            <ul>
                <li *ngFor="let fruit of fruits">{{fruit}}</li>
            </ul>
        </div>
    `
})
export class NgForDemoComponent {
    fruits = ['Tomato', 'Potato', 'Avocado']
}