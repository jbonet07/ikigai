import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent {
  @ViewChild("f") signupForm: NgForm;
  user = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  submitted = false;
  constructor(private router: Router) {}

  onSubmit() {
    this.submitted = true;
    this.user.name = this.signupForm.value.userData.name;
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;

    this.signupForm.reset();
    this.navigateAllset();
  }

  navigateAllset() {
    this.router.navigate(["allset"]);
  }
}
