import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { ClickMe2Component } from './click-me2.component';
import { KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4 } from './keyup.components';
import { LoopbackComponent } from './loop-back.component';
import { LittleTourComponent } from './little-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    ClickMe2Component,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    LoopbackComponent,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
