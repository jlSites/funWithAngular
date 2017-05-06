import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PetDetailComponent } from "./pet-detail.component";
import { PetsComponent } from "./pets.component";
import { DashboardComponent } from "./dashboard.component";
import { PetService } from "./pet.service";
import { AppRoutingModule } from './app-routing.module';

import { requestOptionsProvider } from './default-request-options.service';

// angular material stuff
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    PetDetailComponent,
    DashboardComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [PetService, requestOptionsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
