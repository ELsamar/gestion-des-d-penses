import { Component, OnInit , Input } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {PageService} from '../../../shared/page.service';
import {AuthService} from '../../../providers/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
declare const $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ NavbarComponent]
})
export class SidebarComponent implements OnInit {

  @Input() show: true;
  menuItems: any[];

  constructor(public afAuth: AngularFireAuth, public authservice: AuthService) { }

  ngOnInit() {
  }
  logout() {
    return this.authservice.signout();
  }
}
