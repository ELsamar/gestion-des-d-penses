import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';
import {PasswordlessAuthComponent} from './passwordless-auth/passwordless-auth.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'login2',
    component: PasswordlessAuthComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
