import {Component, Injectable, OnInit , Input, Output,EventEmitter,ElementRef } from '@angular/core';
import {PageService} from '../../../shared/page.service';
import {AuthService} from '../../../providers/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public pageName: any = 'thispage';
  visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(public afAuth: AngularFireAuth, public authservice: AuthService) {
   
  }


  ngOnInit(){
  }
 
  logout() {
    return this.authservice.signout();
  }

}
