import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../../shared/models/user';
import {FormsModule, NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {ToastrService} from 'ngx-toastr';

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
  // userprofil: User ;
  userlist: AngularFireList<any>;
  user: User;
  userCon: Observable<User>;
//  userObject: any;
  test = false;
  userObject: any;

  constructor(private userservice: UserService, private toastr: ToastrService) {
    this.getUser();
  }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(userForm: NgForm) {
    this.userservice.insertUser(userForm.value);
  }

  getUser() {
    this.userservice.getUser().then(snapshot => {
      if (snapshot.val()) {
        this.userObject = snapshot.val();
      console.log(this.userObject);
      this.test = true;
      } else if (!snapshot.val()) {
        this.userObject = {
          nom: ' ',
          prenom: ' ',
          nomutulisateur: ' ',
          emailuser: ' ',
          datenaissance: ' ',
          nationalite: ' ',
          pays: ' ',
          etatcivil: ' ',
          profession: ' ',
          sexe: '   ',
        };
        this.toastr.warning('new user', 'Veuillez completer votre profil' );
      }
    });

  }
}
