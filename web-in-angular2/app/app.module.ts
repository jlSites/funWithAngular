import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {SayHiDemoComponent} from "./01-say-hi/say-hi-demo.component";
import {BindingOnewayDemoComponent} from "./02-binding-oneway/binding-oneway-demo.component";
import {AnotherClassDemoComponent} from "./03-another-class/another-class-demo.component";
import {BindingTwowayDemoComponent} from "./04-binding-twoway/binding-twoway-demo.component";
import {BindingEventDemoComponent} from "./05-binding-event/binding-event-demo.component";
import {InjectingServiceDemoComponent} from "./06-injecting-service/injecting-service-demo.component";
import {NgForDemoComponent} from "./07-ngfor/ngfor-demo.component";
import {NgIfDemoComponent} from "./08-ngif/ngif-demo.component";
import {AcceptInputDemoComponent} from "./09-accept-input/accept-input-demo.component";
import {BestFruitComponent} from "./09-accept-input/best-fruit.component";
import {RoutingDemoComponent} from "./10-routing/routing-demo.component";
import {demoRouting} from "./10-routing/routing-demo.routing";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      demoRouting
  ],
  declarations: [
      AppComponent,
      SayHiDemoComponent,
      BindingOnewayDemoComponent,
      AnotherClassDemoComponent,
      BindingTwowayDemoComponent,
      BindingEventDemoComponent,
      InjectingServiceDemoComponent,
      NgForDemoComponent,
      NgIfDemoComponent,
      AcceptInputDemoComponent,
      BestFruitComponent,
      RoutingDemoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }