import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    FormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class FormModule { }
