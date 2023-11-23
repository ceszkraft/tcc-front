import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: 'register', component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
