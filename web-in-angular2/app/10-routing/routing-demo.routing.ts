import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./about.component";
import {ProductsComponent} from "./products.component";
import {ProductDetailComponent} from "./product-detail.component";

const myRoutes: Routes = [
    {
        path: '10-routing/about',
        component: AboutComponent
    },
    {
        path: '10-routing/products',
        component: ProductsComponent
    },
    {
        path: '10-routing/products/:product',
        component: ProductDetailComponent
    }
]

export const demoRouting = RouterModule.forRoot(myRoutes);