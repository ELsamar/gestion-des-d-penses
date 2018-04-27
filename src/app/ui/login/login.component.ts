import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../../providers/auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {ToastrService} from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  isLogged: Boolean;
  pseudo: String;
  email: string;
  emailSent = false;
  errorMessage: string;
  password: string;
  public formModel: FormModel = {};
  constructor(public authService: AuthService, public afAuth: AngularFireAuth, private router: Router,
              private afs: AngularFirestore, private toastr: ToastrService, private modalService: NgbModal) {

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

  async sendEmailLink() {
    this.authService.sendEmailLink(this.email);
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
    this.authService.singup(this.email, this.password);
  }
  signin() {
    this.authService.singin(this.email, this.password);
  }
  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
