import { NgModule } from '@angular/core';
import { MdButtonModule, MdInputModule, MdCheckboxModule } from '@angular/material';

// angular material stuff, and check https://material.angular.io/guide/getting-started
@NgModule({
    imports: [MdButtonModule, MdInputModule, MdCheckboxModule],
    exports: [MdButtonModule, MdInputModule, MdCheckboxModule]
})
export class CustomMaterialModule { }
