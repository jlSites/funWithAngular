import {Component} from "@angular/core";
import {FooService, STEP} from "./foo.service";

@Component({
    selector: 'injecting-service-demo',
    template: `
        <div>Click the button to increase the count={{count}}</div>
        <div>
            <button (click)="onPlusMe()">+{{step}}</button>
        </div>
    `,
    providers: [FooService]
})
export class InjectingServiceDemoComponent{
    count = 12;
    step = STEP;

    constructor(private fooService: FooService) { }

    onPlusMe() {
        this.count += this.fooService.getStep();
    }
}