import {Component, Injectable, OnInit} from '@angular/core';
import {PageService} from '../../../shared/page.service';
import {AuthService} from '../../../providers/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public pageName: any = 'thispage';

  constructor(public afAuth: AngularFireAuth, public authservice: AuthService) {
  }

  ngOnInit() {
  }
  logout() {
    return this.authservice.signout();
  }

}
