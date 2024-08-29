/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/prefer-readonly */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';

import { Person } from 'src/app/model/Person';
import { FormService } from './form.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'
  ],
  providers: [HttpClient]
})
export class FormComponent implements OnInit {

  defaultStatusServer: boolean = false;

  persons: Person[] = [];
  person: Person = {
    fullName: '',
    cpf: '',
    email: '',
    password: '',
    username: '',
    birthday: ''
  };

  constructor(private formBuilder: FormBuilder, 
    private service: FormService) { }

  ngOnInit (): void {
    this.isServerRunning()
  }

  isServerRunning () {
    this.service.isServerRunning().subscribe((data: boolean) => {
      console.log(data);
      this.defaultStatusServer = data
    })

  }

  postUser(user: Person) {
    this.service.postPerson(user)
      .subscribe((userObj: Person) => {
        this.person = userObj
      }) 
  }

  getUsers () {
    this.service.getUserService().subscribe((data: Person[]) => {
      console.log(data);
      this.persons = data
    })
  }


  profileForm = this.formBuilder.group({
    
    fullName: ['', [
      Validators.minLength(10),
      Validators.max(120)
    ]],
    
    cpf: ['', [
      Validators.required
    ]], 
    
    email: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.max(100),
      Validators.email

    ]],

    password: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.max(25)
    ]],

    username: ['', [
      Validators.minLength(10),
      Validators.max(120),
      Validators.required
    ]],

    birthday: ['', [
      Validators.required

    ]]

  })

  onSubmit() {
    this.person = {

      fullName: this.profileForm.value.fullName,
      cpf: this.profileForm.value.cpf,
      email: this.profileForm.value.email,
      password: this.profileForm.value.password,
      username: this.profileForm.value.username,
      birthday: this.profileForm.value.birthday
  
    }
    this.postUser(this.person)
    console.log(`Isso foi enviado ->\n ${JSON.stringify(this.person)}`);

    this.profileForm.reset()
  }

  
}
