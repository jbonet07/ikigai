import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { StepsService } from "../../services/steps.service";
import { Step } from "../../models/step";

@Component({
  selector: "app-scenario",
  templateUrl: "./scenario.component.html",
  styleUrls: ["./scenario.component.scss"]
})
export class ScenarioComponent implements OnInit {
  step: Step;
  editMode: boolean;
  stepId: number;
  input_placeholder = "#Comunication; #Project management; …";

  constructor(
    public route: ActivatedRoute,
    private stepsService: StepsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.stepId = +params["id"];
      this.step = this.stepsService.getStep(this.stepId);
    });

    this.route.url.subscribe(values => {
      this.editMode = this.isEditMode(values);
    });
  }

  isEditMode(values): boolean {
    return values[2] && values[2].toString() === "edit";
  }
}
