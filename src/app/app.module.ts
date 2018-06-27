import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AmChartsModule, AmChartsService} from '@amcharts/amcharts3-angular';


import {AppComponent} from './app.component';
import {NotFound404Component} from './shared/not-found404/not-found404.component';
import { AuthService} from './providers/auth.service';
import {TransactionService} from './shared/services/transaction.service';

import {ClientModule} from './ui/client/client.module';

import {FormsModule} from '@angular/forms';
import {PublicModule} from './ui/public/public.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModule} from './ui/login/login.module';
import {AuthGuardService} from './shared/services/auth-guard.service';

import {UserService} from './shared/services/user.service';

import {} from '@polymer/paper-toggle-button';



@NgModule({
  declarations: [
    AppComponent,
    NotFound404Component,
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
    NgbModule,
    AmChartsModule,

  ],
  providers: [AuthService, TransactionService , AuthGuardService, UserService, AmChartsService  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
