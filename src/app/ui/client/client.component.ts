import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../providers/auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  constructor(public authService: AuthService) {
    console.log(this.authService.currentUserId);
    localStorage.setItem('currentUserId', this.authService.currentUserId);
  }

  ngOnInit() {
  }

}
