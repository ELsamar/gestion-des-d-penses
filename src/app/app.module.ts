import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatModule } from './chat/chat.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NotFound404Component} from './shared/not-found404/not-found404.component';
import { AuthService} from './providers/auth.service';
import {TransactionService} from './shared/transaction.service';

import {ClientModule} from './ui/client/client.module';
import {PageService} from './shared/page.service';
import { LoginComponent } from './login/login.component';


import {FormsModule} from '@angular/forms';
import {PublicModule} from './ui/public/public.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModule} from './ui/login/login.module';
import {AuthGuardService} from './shared/services/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    NotFound404Component,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ClientModule,
    PublicModule,
    LoginModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    DateValueAccessorModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [PageService, AuthService, TransactionService , AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
