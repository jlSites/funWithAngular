import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo-form-control-checkbox',
    templateUrl: './demo-form-control-checkbox.component.html' 
})
export class DemoFormControlCheckboxComponent implements OnInit {
    checked = true;
    indeterminate = false;
    align = 'start';
    disabled = false;
    color='accent';

    constructor() { }

    ngOnInit() { }
}