import {AppRoutingModule} from './app-routing.module';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatModule } from './chat/chat.module';

import {AppComponent} from './app.component';
import {NotFound404Component} from './shared/not-found404/not-found404.component';
import { AuthService} from './providers/auth.service';


import {ClientModule} from './ui/client/client.module';
import {PageService} from './shared/page.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PasswordlessAuthComponent } from './passwordless-auth/passwordless-auth.component';
import {FormsModule} from '@angular/forms';
import {PublicComponent} from './ui/public/public.component';
import {PublicModule} from './ui/public/public.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFound404Component,
    LoginComponent,
    HomeComponent,
    PasswordlessAuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    PublicModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    // ChatModule
  ],
  providers: [PageService, AuthService  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
