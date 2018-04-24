import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../../../providers/auth.service';

@Component({
  selector: 'app-passwordless-auth',
  templateUrl: './passwordless-auth.component.html',
  styleUrls: ['./passwordless-auth.component.css']
})
export class PasswordlessAuthComponent implements OnInit {

  public user: Observable <any>;
  email: string;
  emailSent = false;
  errorMessage: string;
  constructor(public authService: AuthService , public afAuth: AngularFireAuth, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.user = this.afAuth.authState;
    console.log(this.user);
    console.log(this.email);
    const url = this.router.url;

    if (url.includes('signIn')) {
      this.confirmSignIn(url);
    }
  }
  async sendEmailLink() {
    this.authService.sendEmailLink();
  }

  async confirmSignIn(url) {
   this.authService.confirmSignIn(url);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
