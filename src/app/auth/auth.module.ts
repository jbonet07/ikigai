import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SignupComponent } from "./containers/signup/signup.component";
import { SigninComponent } from "./containers/signin/signin.component";

const appRoutes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forChild(appRoutes)],
  bootstrap: [],
  exports: [SignupComponent, SigninComponent]
})
export class AuthModule {}
