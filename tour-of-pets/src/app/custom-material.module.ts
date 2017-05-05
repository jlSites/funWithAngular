import { NgModule } from '@angular/core';
import { MdButtonModule, MdInputModule } from '@angular/material';

// angular material stuff, and check https://material.angular.io/guide/getting-started
@NgModule({
    imports: [MdButtonModule, MdInputModule],
    exports: [MdButtonModule, MdInputModule]
})
export class CustomMaterialModule { }
