import { Component } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-form',
  template: ``
})
export class MyForm  {
  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      name:["", Validators.required],
      email: [""]
    })
  }
  saveForm(){}
}
