import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule,
   Validators, FormGroup, FormControl} from '@angular/forms';
  
import { PersonModel } from 'src/app/model/Person';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit{
  constructor(private _formBuilder: FormBuilder, 
              private service: FormService) {}
  
  ngOnInit(): void {
    // this.getUsers()
    this.isServerRunning()
  }

  defaultStatusServer: Boolean = false;

  isServerRunning(){
    this.service.isServerRunning().subscribe((data: Boolean) => {
      console.log(data);
      this.defaultStatusServer = data
    })
  }

  getUsers(){
    this.service.getUserService().subscribe((data: PersonModel[]) => {
      console.log(data);
      this.personModels = data
    })
  }

  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  personModels?: PersonModel[]
  personModel: PersonModel = {
    id: 0,
    first_name: '',
    last_name: '',
    cpf: '',
    email: '',
    secret: '',
    consumerName: ''
  }

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
      Validators.minLength(8),
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
