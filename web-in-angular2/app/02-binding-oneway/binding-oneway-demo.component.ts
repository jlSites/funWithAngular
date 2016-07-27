import { Component } from "@angular/core";

@Component({
    selector: 'binding-oneway-demo',
    template: '<div>hello, {{hero}}={{isMarried}}</div>'
})
export class BindingOnewayDemoComponent {
    hero = 'Batman';
    isMarried = false;
}