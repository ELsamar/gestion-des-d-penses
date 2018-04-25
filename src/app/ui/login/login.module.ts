import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MedialoginComponent } from './medialogin/medialogin.component';
import {PasswordlessAuthComponent} from './passwordless-auth/passwordless-auth.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    MedialoginComponent,
  PasswordlessAuthComponent]
})
export class LoginModule { }
