import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class AuthService {

  providerG: firebase.auth.GoogleAuthProvider;
  providerF: firebase.auth.FacebookAuthProvider;
  public user: Observable <any>;
  email: string;
  emailSent = false;
  errorMessage: string;
  constructor(public afAuth: AngularFireAuth, private toastr: ToastrService ) {}

  loginWithFacebook() {
    this.providerF = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(this.providerF);
  }
  loginWithGoogle() {
    this.providerG = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(this.providerG);

  }
  async sendEmailLink() {
    const actionCodeSettings = {
      // Your redirect URL
      url: 'http://localhost:4200/login',
      handleCodeInApp: true
    };

    try {
      await this.afAuth.auth.sendSignInLinkToEmail(this.email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', this.email);
      this.toastr.success( 'Cool! We sent you an email with your login link', 'succes');
      this.emailSent = true;
      console.log(this.emailSent);
    } catch (err) {
      this.errorMessage = err.message;
      this.toastr.error(this.errorMessage.toLocaleString(), 'erreur');
    }
  }

  async confirmSignIn(url) {
    try {
      if (this.afAuth.auth.isSignInWithEmailLink(url)) {
        console.log(this.email);
        let email = window.localStorage.getItem('emailForSignIn');

        // If missing email, prompt user for it
        if (!email) {
          email = window.prompt('Please provide your email for confirmation');
        }

        // Signin user and remove the email localStorage
        const result = await this.afAuth.auth.signInWithEmailLink(email, url);
        window.localStorage.removeItem('emailForSignIn');
      }
    } catch (err) {
      this.errorMessage = err.message;
    }
  }




  logout() {

    return firebase.auth().signOut();

  }

}
