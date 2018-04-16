import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AngularFireAuthModule} from 'angularfire2/auth';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from '../../shared/auth.guard';

export const rootes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent }
];


@NgModule({
  imports: [RouterModule.forChild(rootes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
