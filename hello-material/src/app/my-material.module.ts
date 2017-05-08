import { NgModule } from '@angular/core';
import { MdButtonModule, MdButtonToggleModule, MdListModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdCardModule, MdTooltipModule } from '@angular/material';

const requiredModules = [
    MdButtonModule,
    MdButtonToggleModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdTooltipModule];

@NgModule({
    imports: requiredModules,
    exports: requiredModules
})
export class MyMaterialModule { }
