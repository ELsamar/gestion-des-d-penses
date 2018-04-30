import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import {ToastrService} from 'ngx-toastr';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable <any>;
  email: string;
  emailSent = false;
  errorMessage: string;
  constructor(public authService: AuthService, private router: Router, public afAuth: AngularFireAuth, private toastr: ToastrService) { }

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
  ngOnInit() {}

}
