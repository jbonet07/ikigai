import "rxjs/add/operator/switchMap";

import {
  Component,
  OnInit,
  HostBinding,
  Input,
  OnChanges
} from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
import { StorageService } from "../../services/storage.service";

@Component({
  selector: "app-step-form",
  templateUrl: "./step-form.component.html",
  styleUrls: ["./step-form.component.scss"]
})
export class StepFormComponent implements OnChanges {
  @Input() id: number;
  @Input() edit: boolean;
  @Input() input_placeholder: string;
  responseText: string;
  last_step = 9;
  last_step_uri = "signup";
  steps: string;

  constructor(
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnChanges() {
    this.responseText = this.storageService.getStep(this.id);
    this.steps = this.displayAnswers();
  }

  goNext() {
    this.id === this.last_step
      ? this.router.navigate([this.last_step_uri])
      : this.router.navigate(["step", this.id + 1]);
    this.storageService.setStep(this.id, this.responseText);
  }
  goIkigai() {
    this.storageService.setStep(this.id, this.responseText);
    this.router.navigate(["/ikigai"]);
  }
  goBack() {
    this.id === 1
      ? this.router.navigate(["start"])
      : this.router.navigate(["step", this.id - 1]);
  }

  displayAnswers() {
    const stepsForId = {
      1: [],
      2: [],
      3: [1, 2],
      4: [],
      5: [2, 4],
      6: [],
      7: [4, 6],
      8: [1, 6],
      9: [3, 5, 7, 8]
    };

    return this.returnAnswers(stepsForId[this.id]);
  }

  returnAnswers(numbers: number[]) {
    let answers = "";
    for (let x = 0; x < numbers.length; x++) {
      answers += " # " + this.storageService.getStep(numbers[x]);
    }
    return answers;
  }
}
