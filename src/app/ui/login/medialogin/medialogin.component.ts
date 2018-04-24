import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../../../providers/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-medialogin',
  templateUrl: './medialogin.component.html',
  styleUrls: ['./medialogin.component.css']
})
export class MedialoginComponent implements OnInit {
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
