import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoTabNavOneComponent } from "./demo-tabs.component";
import { DemoTabNavTwoComponent } from "./demo-tabs.component";

const routes: Routes = [
    { path: 'navOne', component: DemoTabNavOneComponent },
    { path: 'navTwo', component: DemoTabNavTwoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class DemoTabsRoutingModule { }


