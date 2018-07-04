import { TestBed, inject } from "@angular/core/testing";

import { StepsService } from "./steps.service";

describe("StepsService", () => {
  let stepsService: StepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepsService]
    });
    stepsService = TestBed.get(StepsService);
  });

  it(
    "should be created",
    inject([StepsService], (service: StepsService) => {
      expect(service).toBeTruthy();
    })
  );

  it("should return multiple step", () => {
    expect(stepsService.getSteps().length > 1).toBeTruthy();
  });

  it("should return step", () => {
    expect(stepsService.getStep(1).title === "STEP 1").toBeTruthy();
  });
});
