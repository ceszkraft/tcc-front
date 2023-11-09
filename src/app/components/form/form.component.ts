import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule,
   Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email
    ]),
    secret: new FormControl('',[
      Validators.minLength(6),
      Validators.required
    ]),
    age: new FormControl('',[
      Validators.required
    ])
  });

  addressForm = new FormGroup({
    street: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100)
    ]),
    number: new FormControl('', [
      Validators.maxLength(10000)
    ]),
    cep: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9)
    ]), 
    state: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ])
  })

  onSubmit(){
    console.log(this.profileForm.value);
    console.log(this.addressForm.value);
    this.profileForm.reset
    this.addressForm.reset

  }
}
