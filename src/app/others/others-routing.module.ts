import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import * as fromContainers from "./containers";

const appRoutes: Routes = [
  { path: "welcome", component: fromContainers.WelcomeComponent },
  { path: "allset", component: fromContainers.AllSetComponent },
  { path: "start", component: fromContainers.StartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class OthersRoutingModule {}
