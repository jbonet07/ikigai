import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import * as fromContainers from "./containers";
import { OthersRoutingModule } from "./others-routing.module";

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [BrowserModule, OthersRoutingModule],
  bootstrap: []
})
export class OthersModule {}
