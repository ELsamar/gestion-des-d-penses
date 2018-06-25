import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {trigger, state, transition , style, animate} from '@angular/animations';
import {UserService} from '../../shared/services/user.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  animations: [
      trigger('sidebarAnim',[
        state('close', style({width : '0px' ,visibility : 'hidden'})),
        state('open' ,style({width:'350px'})),
        transition ('open=>close',animate ('400ms ease-in')),
        transition ('close=>open',animate ('400ms ease-out')),
      ]),

      trigger('maincAnim', [
        state('close', style({marginLeft : '0px'})),
        state('open' , style({marginLeft: '350px'})),
        transition ('open=>close', animate ('400ms ease-in')),
        transition ('close=>open', animate ('400ms ease-out'))])
  ]
})
export class ClientComponent implements OnInit {
  openclose = 'open'
  constructor(public authService: AuthService, public userservice: UserService) {
  console.log(localStorage.getItem('userid'));
  }
  ngOnInit() {

    this.userservice.getUser().then(snapshot => {
      if (snapshot.val()) {
        this.userservice.userpict = snapshot.val().imageuser;
        console.log(this.userservice.userpict);
        console.log(snapshot.val().imageuser);
      } else if (!snapshot.val()) {}
    });
  }
  toggle(): void {
    this.openclose = (this.openclose === 'open' ) ? 'close' : 'open' ;
  }
}
