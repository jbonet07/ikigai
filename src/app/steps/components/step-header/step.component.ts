import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-step",
  templateUrl: "./step.component.html",
  styleUrls: ["./step.component.scss"]
})
export class StepHeaderComponent implements OnInit {
  @Input() step: any;
  input_placeholder: string;

  constructor(private route: ActivatedRoute) {
    this.input_placeholder = "#Comunication; #Project management; …";
  }

  ngOnInit() {}
}
