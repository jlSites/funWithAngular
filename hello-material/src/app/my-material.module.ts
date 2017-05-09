import { NgModule } from '@angular/core';
import { MdButtonModule, MdButtonToggleModule, MdListModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdCardModule, MdTooltipModule, MdDialogModule, MdGridListModule, MdTabsModule, MdMenuModule, MdCheckboxModule, MdRadioModule } from '@angular/material';

const requiredModules = [
    MdButtonModule,
    MdButtonToggleModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdTooltipModule,
    MdDialogModule,
    MdGridListModule,
    MdTabsModule,
    MdMenuModule,
    MdCheckboxModule,
    MdRadioModule
];

@NgModule({
    imports: requiredModules,
    exports: requiredModules
})
export class MyMaterialModule { }
