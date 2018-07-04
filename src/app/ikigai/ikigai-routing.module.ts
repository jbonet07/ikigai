import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import * as fromContainers from "./containers";

const appRoutes: Routes = [
  { path: "ikigai", component: fromContainers.IkigaiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class IkigaiRoutingModule {}
