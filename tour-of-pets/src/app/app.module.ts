import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PetDetailComponent } from "./pet-detail.component";
import { PetService } from "./pet.service";

@NgModule({
  declarations: [
    AppComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
