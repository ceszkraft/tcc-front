import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {
    path: 'register', component: FormComponent
  },
  {
    path: 'about', component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
