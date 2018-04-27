import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs/Observable';
import {User} from 'firebase';

@Injectable()

export class AuthService {

  providerG: firebase.auth.GoogleAuthProvider;
  providerF: firebase.auth.FacebookAuthProvider;
  public user: Observable <any>;
  email: string;
  emailSent = false;
  errorMessage: string;
  errorCode: string;
  constructor(public afAuth: AngularFireAuth, private toastr: ToastrService ) {}
  singup(email: string, password: string) {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
      this.toastr.success('user created', 'singup seccued');
    } catch (error) {
      // Handle Errors here.
      this.errorCode = error.code;
      this.errorMessage = error.message;
      this.toastr.error(this.errorMessage.toLocaleString(), 'erreur');
      this.toastr.error(this.errorCode.toLocaleString(), 'erreur');
    }
  }
  singin(email: string, password: string) {
    try {
      if (firebase.auth().signInWithEmailAndPassword(email, password)) {
        this.toastr.success('bienvenu', 'singin seccued');
      }
    } catch (error) {
      // Handle Errors here.
      this.errorCode = error.code;
      this.errorMessage = error.message;
      this.toastr.error(this.errorMessage.toLocaleString(), 'erreur');
      this.toastr.error(this.errorCode.toLocaleString(), 'erreur');
    }
  }
  loginWithFacebook() {
    this.providerF = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(this.providerF);
  }
  loginWithGoogle() {
    this.providerG = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(this.providerG);

  }
  async sendEmailLink(email: string) {
    const actionCodeSettings = {
      // Your redirect URL
      url: 'http://localhost:4200/login',
      handleCodeInApp: true
    };
    try {
      if ( await this.afAuth.auth.sendSignInLinkToEmail(email, actionCodeSettings)) {
      sessionStorage.setItem('emailForSignIn', email);
      this.toastr.success( 'Cool! We sent you an email with your login link', 'succes');
      this.emailSent = true;
      console.log(this.emailSent);
      }
    } catch (err) {
      this.errorMessage = err.message;
      this.toastr.error(this.errorMessage.toLocaleString(), 'erreur');
    }
  }

  async confirmSignIn(url) {
    try {
      if (this.afAuth.auth.isSignInWithEmailLink(url)) {
        console.log(this.email);
        let email = sessionStorage.getItem('emailForSignIn');

        // If missing email, prompt user for it
        if (!email) {
          email = window.prompt('Please provide your email for confirmation');
        }

        // Signin user and remove the email localStorage
        const result = await this.afAuth.auth.signInWithEmailLink(email, url);
       // sessionStorage.removeItem('emailForSignIn');
        this.toastr.success('Congrats You logged in without a password!', 'succes');
      }
    } catch (err) {
      this.errorMessage = err.message;
      this.toastr.error(this.errorMessage.toLocaleString(), 'erreur');
    }
  }
  signout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
}
