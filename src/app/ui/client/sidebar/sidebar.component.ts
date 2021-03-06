import { Component, OnInit , Input } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
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
    localStorage.removeItem('userid');
    return this.authservice.signout();
  }
}
