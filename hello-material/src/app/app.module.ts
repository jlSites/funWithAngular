import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MyMaterialModule } from './my-material.module';
import { AppComponent } from './app.component';

import { DemoButtonComponent } from "./demo-button.component";
import { DemoListComponent } from './demo-list.component';
import { DemoDialogComponent } from './demo-dialog.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    DemoButtonComponent,
    DemoListComponent,
    DemoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
