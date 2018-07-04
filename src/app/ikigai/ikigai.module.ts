import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import * as fromContainers from "./containers";

import { IkigaiRoutingModule } from "./ikigai-routing.module";

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [BrowserModule, IkigaiRoutingModule],
  bootstrap: []
})
export class IkigaiModule {}
