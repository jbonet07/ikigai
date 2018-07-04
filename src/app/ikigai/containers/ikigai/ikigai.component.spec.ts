import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IkigaiComponent } from "./ikigai.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("IkigaiComponent", () => {
  let component: IkigaiComponent;
  let fixture: ComponentFixture<IkigaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [IkigaiComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IkigaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
