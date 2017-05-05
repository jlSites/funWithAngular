import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './dashboard.component';
import { PetsComponent } from "./pets.component";
import { PetDetailComponent } from "./pet-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'pets', component: PetsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:name', component: PetDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
