import { MyForm } from "./form.component";
import { FormBuilder } from "@angular/forms";

describe("FormComponent", () => {
  
  let component: MyForm;

  beforeEach(() => {
    component = new MyForm(new FormBuilder());
  });
  it("should create a form with 2 props", () => {
    expect(component.form.contains("name")).toBeTruthy();
    expect(component.form.contains("email")).toBeTruthy();
  });

  it("should make the name control required", () => {
    let control = component.form.get("name");
    control.setValue("");
    expect(control.valid).toBeFalsy();
  });
});
