import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent {
  @ViewChild("f") signupForm: NgForm;
  user = {
    email: "",
    password: ""
  };
  submitted = false;
  constructor(private router: Router) {}

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;

    this.signupForm.reset();
    this.navigateStart();
  }

  navigateStart() {
    this.router.navigate(["start"]);
  }
}
