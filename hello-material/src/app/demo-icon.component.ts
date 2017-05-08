import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from "@angular/material";

@Component({
    selector: 'demo-icon',
    templateUrl: './demo-icon.component.html'
})
export class DemoIconComponent implements OnInit {
    constructor(private iconRegistry: MdIconRegistry) { }

    ngOnInit() {

    }
}