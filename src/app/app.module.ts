import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { StepsModule } from "./steps/steps.module";
import { IkigaiModule } from "./ikigai/ikigai.module";
import { OthersModule } from "./others/others.module";
import { AuthModule } from "./auth/auth.module";

const appRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "welcome" },
  { path: "**", pathMatch: "full", redirectTo: "welcome" }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StepsModule,
    RouterModule.forRoot(appRoutes),
    IkigaiModule,
    OthersModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
