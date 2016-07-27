import {Component} from "@angular/core";

@Component({
    selector: 'routing-demo',
    template: `
        <nav>
            <a routerLink="/10-routing/about" routerLinkActive="active">About</a>
            <a routerLink="/10-routing/products" routerLinkActive="active">Products</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles: [`
        nav a.active {
            color: #039be5;
        }
    `]
})
export class RoutingDemoComponent { }