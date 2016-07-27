import { Component } from '@angular/core';

@Component({
    selector: 'click-me2',
    template: `
    <button (click)="onClickMe2($event)">No!...Click me</button>
    {{clickMsg}}
    `
})
export class ClickMe2Component {
    clickMsg = '';
    clicks = 1;
    onClickMe2(event: any): void {
        let evtMsg = event ? ' Event target is ' + event.target.tagName : '';
        // the following two ways are both okay
        this.clickMsg = `Click #${this.clicks++}. ${evtMsg}`;
        //this.clickMsg = 'Click #' + this.clicks++ + '.' + evtMsg;
    }
}