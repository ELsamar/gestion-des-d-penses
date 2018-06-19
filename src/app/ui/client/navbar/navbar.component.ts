import {Component, Injectable, OnInit , Input, Output, EventEmitter, ElementRef } from '@angular/core';
import {AuthService} from '../../../providers/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {UserService} from '../../../shared/services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  visible = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(public afAuth: AngularFireAuth, public authservice: AuthService, private userservice: UserService) {}


  ngOnInit() {
  }
  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
  logout() {
    return this.authservice.signout();
  }

}
