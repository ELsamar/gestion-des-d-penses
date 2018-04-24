import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../../providers/auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  isLogged: Boolean;
  pseudo: String;
  email: String;
  emailSent = false;
  errorMessage: string;

  constructor(public authService: AuthService, public afAuth: AngularFireAuth, private router: Router,
              private afs: AngularFirestore, private toastr: ToastrService) {

    this.user = this.authService.afAuth.authState;
    this.user.subscribe((auth) => {

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

  ngOnInit() {
    this.user = this.afAuth.authState;
    console.log(this.user);
    console.log(this.email);
    const url = this.router.url;

    if (url.includes('signIn')) {
      this.confirmSignIn(url);
      this.toastr.success('Congrats You logged in without a password!', 'succes');
    }
  }

  async sendEmailLink() {
    this.authService.sendEmailLink();
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
}
