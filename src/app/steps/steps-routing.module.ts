import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import * as fromContainers from "./containers";

const appRoutes: Routes = [
  { path: "step/:id", component: fromContainers.ScenarioComponent },
  { path: "step/:id/edit", component: fromContainers.ScenarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class StepsRoutingModule {}
