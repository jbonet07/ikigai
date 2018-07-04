import { Injectable } from "@angular/core";
import { Step } from "../models/step";

@Injectable()
export class StorageService {
  constructor() {}

  setStep(number, answer): void {
    let answers = JSON.parse(localStorage.getItem("answers"));
    if (answers === null) {
      answers = {};
    }

    answers[number.toString()] = answer;
    localStorage.setItem("answers", JSON.stringify(answers));
  }

  getStep(number): string {
    return JSON.parse(localStorage.getItem("answers"))[number.toString()];
  }
}
