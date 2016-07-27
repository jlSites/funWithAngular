import {Component} from "@angular/core";

@Component({
    selector: 'binding-event-demo',
    template: `
        <div>Click the button to increase the count={{count}}</div>
        <div>
            <button (click)="onPlusMe()">+1</button>
        </div>
    `
})
export class BindingEventDemoComponent {
    count: number = 12;

    onPlusMe() {
        this.count += 1;
    }
}