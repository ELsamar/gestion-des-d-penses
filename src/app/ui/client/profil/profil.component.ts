import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../../shared/models/user';
import {FormsModule, NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {ToastrService} from 'ngx-toastr';
import {FileUpload} from '../../../shared/models/user';

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
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = {percentage: 0};
  constructor(private userservice: UserService, private toastr: ToastrService) {
    this.getUser();
  }

  ngOnInit() {
    this.user = new User();
  }
uploadimage() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new FileUpload(file);
  this.userservice.uploadeimage( this.user, this.currentFileUpload, this.progress);
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
          datenaissance:  Date,
          nationalite: ' ',
          pays: ' ',
          etatcivil: ' ',
          profession: ' ',
          sexe: '   ',
          imageuser : '"../assets/img/profil.png"'
        };
        this.toastr.warning('new user', 'Veuillez completer votre profil' );
      }
    });

  }
  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
}
