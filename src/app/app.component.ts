import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from '@angular/router';

import { AuthService } from './providers/auth.service';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;

  isLogged: Boolean;
  pseudo: String;
  email: String;

  constructor(public authService: AuthService, public afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {

   this.user = this.authService.afAuth.authState;
     this.user.subscribe( (auth) => {

          if (auth) {

            this.isLogged = true;
            this.pseudo = auth.displayName;
            this.email = auth.email;
            console.log('Connecté');
            console.log(auth);
            console.log(this.pseudo);
            this.router.navigate(['client']);
          } else {

            console.log('Déconnecté');
            this.isLogged = false;
            this.pseudo = '';
            this.email = '';
            this.router.navigate(['login']);

          }

        }

      );

    }

  }

