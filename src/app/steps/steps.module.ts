import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StepsRoutingModule } from "./steps-routing.module";

import * as fromComponents from "./components";
import * as fromContainers from "./containers";
import * as fromServices from "./services";

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [BrowserModule, FormsModule, StepsRoutingModule],
  exports: [...fromComponents.components, ...fromContainers.containers],
  providers: [...fromServices.services]
})
export class StepsModule {}
