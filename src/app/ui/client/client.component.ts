import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../providers/auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public currentUserId: any ;
  constructor(public authService: AuthService) {
    console.log('id', this.authService.currentUserId);
    this.currentUserId = this.authService.currentUserId ;
  }

  ngOnInit() {
  }

}
