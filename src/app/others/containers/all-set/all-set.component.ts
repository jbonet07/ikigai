import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-all-set",
  templateUrl: "./all-set.component.html",
  styleUrls: ["./all-set.component.scss"]
})
export class AllSetComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => this.navigateIkigai(), 3000);
  }
  navigateIkigai() {
    this.router.navigate(["ikigai"]);
  }
}
