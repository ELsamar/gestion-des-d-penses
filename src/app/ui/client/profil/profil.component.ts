import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import {FormsModule, NgForm} from '@angular/forms';
import { User} from '../../../shared/models/user';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
    
  }



}
