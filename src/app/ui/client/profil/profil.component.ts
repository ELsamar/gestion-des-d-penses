import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../../shared/models/user';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  providers: [UserService],
})
export class ProfilComponent implements OnInit {
  UserForm: FormGroup;
  Etatcivil: any = ['célibataire', 'marier', 'divorcé'];
  Profession: any = ['étudiant', 'salarié', 'gérant'];
  Sexe: any = ['homme', 'femme'];

  constructor(private userservice: UserService) {
  }

  user: User;

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(userForm: NgForm) {
    this.userservice.insertUser(userForm.value);
  }
}
