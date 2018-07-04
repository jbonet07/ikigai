import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AllSetComponent } from "./all-set.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("AllSetComponent", () => {
  let component: AllSetComponent;
  let fixture: ComponentFixture<AllSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AllSetComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
