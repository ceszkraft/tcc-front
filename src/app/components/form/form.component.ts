import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {

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
    age: new FormControl('', [
      Validators.required
    ]),
  });

  onSubmit(){
    console.log(this.profileForm.value);
    this.profileForm.reset()
  }

}
