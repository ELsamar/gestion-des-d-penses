import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import{trigger,state,transition,style,animate} from '@angular/animations';
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

      trigger('maincAnim',[
        state('close', style({marginLeft : '0px'})),
        state('open' ,style({marginLeft:'350px'})),
        transition ('open=>close',animate ('400ms ease-in')),
        transition ('close=>open',animate ('400ms ease-out')),
      
      ])
  ]
})
export class ClientComponent implements OnInit {
  public currentUserId: any ;
  constructor(public authService: AuthService) {
    this.currentUserId = this.authService.currentUserId ;
    console.log('id', this.currentUserId );
  }
  openclose :string ='open'
  ngOnInit() {
  }
  toggle(): void {
    this.openclose=(this.openclose==='open')?'close':'open';
  
  }
}
