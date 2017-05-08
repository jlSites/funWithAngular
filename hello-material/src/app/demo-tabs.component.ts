import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo-tabs',
    templateUrl: './demo-tabs.component.html',
    styleUrls: ['./demo-tabs.component.css']
})
export class DemoTabsComponent implements OnInit {
    navLinks = ['navOne', 'navTwo'];
    constructor() { }

    ngOnInit() { }
}

@Component({
    selector: 'demo-tabs-nav-one',
    template: `<p>nav one content</p>`
})
export class DemoTabNavOneComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

@Component({
    selector: 'demo-tabs-nav-two',
    template: `<p>nav two content</p>`
})
export class DemoTabNavTwoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}