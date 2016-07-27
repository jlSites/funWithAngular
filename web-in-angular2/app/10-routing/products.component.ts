import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    selector: 'my-products',
    template: `
        <div>
            <p>Click the product to view details</p>
            <ul>
                <li *ngFor="let fruit of fruits" (click)="gotoDetail(fruit)">{{fruit}}</li>
            </ul>
        </div>
    `
})
export class ProductsComponent {
    fruits = ['Tomato', 'Potato', 'Avocado']

    constructor(private router: Router) {

    }

    gotoDetail(selected: string) {
        this.router.navigate(['/10-routing/products', selected]);
    }
}