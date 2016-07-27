import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'my-product-detail',
    template: `
<div><label>name: </label>{{fruit | uppercase}}</div>
<div><label>price: </label>{{price | currency}}</div>
<button (click)="goBack()">Back</button>
`
})
export class ProductDetailComponent implements OnInit{
    fruit = '';
    price = 23.23;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.fruit = params['product'];
        });
    }

    goBack() {
        window.history.back();
    }
}