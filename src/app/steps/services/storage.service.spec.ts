import { TestBed, inject } from "@angular/core/testing";

import { StorageService } from "./storage.service";

describe("StorageService", () => {
  let storageService: StorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
    storageService = TestBed.get(StorageService);
  });
  afterEach(() => {
    localStorage.clear();
    storageService = undefined;
  });
  it(
    "should be created",
    inject([StorageService], (service: StorageService) => {
      expect(service).toBeTruthy();
    })
  );
  it("should save", () => {
    storageService.setStep("1", "holahola");
    expect(
      JSON.parse(localStorage.getItem("answers"))["1"] === "holahola"
    ).toBeTruthy();
  });
  it("should update", () => {
    storageService.setStep("8", "holahola");
    expect(
      JSON.parse(localStorage.getItem("answers"))["1"] === "holahola"
    ).toBeTruthy();
    storageService.setStep("1", "holahola2");
    expect(
      JSON.parse(localStorage.getItem("answers"))["1"] === "holahola1"
    ).toBeTruthy();
  });
  it("should get", () => {
    localStorage.setItem("answers", JSON.stringify({ 1: "holahola" }));
    expect(storageService.getStep("1") === "holahola").toBeTruthy();
  });
});
