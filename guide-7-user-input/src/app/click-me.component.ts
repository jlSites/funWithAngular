import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMsg}}
    `
})
export class ClickMeComponent {
    clickMsg = '';
    onClickMe(): void {
        this.clickMsg = 'you are my hero!';
    }
}