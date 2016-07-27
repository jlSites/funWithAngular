import { Component } from '@angular/core';

@Component({
    selector: 'loop-back',
    template: `
    <!-- the input has a template reference variable, and also binds its (keyup) event to nothing -->
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
    `
})
export class LoopbackComponent {

}