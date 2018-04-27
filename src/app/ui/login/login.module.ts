import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RECAPTCHA_LANGUAGE } from 'ng-recaptcha';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {PasswordlessAuthComponent} from './passwordless-auth/passwordless-auth.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule
  ],
  declarations: [
    LoginComponent,
  PasswordlessAuthComponent],
  providers: [
     {
     provide: RECAPTCHA_SETTINGS,
     useValue: { siteKey: '6Ldw8FUUAAAAAGGrC5Sf-sI5N6co4HT5pykzIBDJ' } as RecaptchaSettings,
     },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'fr', // use French language
    }]
})
export class LoginModule { }
