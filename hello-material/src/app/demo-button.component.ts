import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo-button',
    templateUrl: './demo-button.component.html',
    styleUrls: ['./demo-button.component.css']
})
export class DemoButtonComponent implements OnInit {
    disabledSettings = [false, true];
    constructor() { }

    ngOnInit() { }
}