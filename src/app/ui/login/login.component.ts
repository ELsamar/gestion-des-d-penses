import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AuthService} from '../../providers/auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {ToastrService} from 'ngx-toastr';
export interface FormModel {
  captcha?: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;
  isLogged: boolean;
  pseudo: String;
  email: string;
  email1: string ;
  emailSent = false;
  errorMessage: string;
  password: string;
  resetPassword = false;
  connecter = true;
  public formModel: FormModel = {};
  constructor(public authService: AuthService, private router: Router,
              private afs: AngularFirestore, private toastr: ToastrService) {

    this.user = this.authService.afAuth.authState;
    this.user.subscribe((auth) => {

        if (auth) {
          localStorage.setItem( 'userid', this.authService.currentUserId);
          sessionStorage.setItem('id', JSON.stringify(auth));
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

  ngOnInit() {
    this.user = this.authService.afAuth.authState;
    this.user.subscribe((auth) => {
      sessionStorage.setItem('id', JSON.stringify(auth));
    })
    console.log(this.user);
    console.log(this.email);
    const url = this.router.url;

    if (url.includes('signIn')) {
      this.confirmSignIn(url);
    }
  }
  sinscrire() {
    this.connecter = false;
  }
  async sendEmailLink() {
    this.authService.sendEmailLink(this.email1);
  }

  async confirmSignIn(url) {
    this.authService.confirmSignIn(url);
  }

  loginfacebook() {
    this.authService.loginWithFacebook().then((data) => {
      this.router.navigate(['client']);
    });
  }

  logingoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.toastr.success('bienvenu', 'bienvenu');
      this.router.navigate(['client']);
    });
  }

  singup() {
    this.authService.singup(this.email, this.password, this.connecter);
  }
  signin() {
    this.authService.singin(this.email, this.password);
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  sendResetEmail() {
    this.authService.resetPassword(this.email)
      .then(() => this.resetPassword = true)
      .catch(_error => {
        this.errorMessage = _error;
      });
  }
}
