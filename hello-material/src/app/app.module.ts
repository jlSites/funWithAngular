import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MyMaterialModule } from './my-material.module';
import { AppComponent } from './app.component';

import { DemoButtonComponent } from "./demo-button.component";
import { DemoListComponent } from './demo-list.component';
import { DemoIconComponent } from './demo-icon.component';
import { DemoDialogComponent } from './demo-dialog.component';
import { DemoDialogFoodPickerComponent } from './demo-dialog.component';
import { DemoGridListComponent } from './demo-gridlist.component';
import { DemoCardComponent } from './demo-card.component';
import { DemoTabsComponent, DemoTabNavOneComponent, DemoTabNavTwoComponent } from './demo-tabs.component';
import { DemoTabsRoutingModule } from './demo-tabs-routing.module';
import { DemoMenuComponent } from "./demo-menu.component";
import { DemoFormControlCheckboxComponent } from './demo-form-control-checkbox.component';

// this is must for angular material
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    DemoButtonComponent,
    DemoListComponent,
    DemoIconComponent,
    DemoDialogComponent,
    DemoDialogFoodPickerComponent,
    DemoGridListComponent,
    DemoCardComponent,
    DemoTabsComponent,
    DemoTabNavOneComponent,
    DemoTabNavTwoComponent,
    DemoMenuComponent,
    DemoFormControlCheckboxComponent
  ],
  entryComponents: [
    // this is must for dialog component
    DemoDialogFoodPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    ReactiveFormsModule,
    MyMaterialModule,
    DemoTabsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
