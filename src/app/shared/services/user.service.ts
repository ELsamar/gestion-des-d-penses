import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {User} from '../.../../../shared/models/user';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';
import {_catch} from 'rxjs/operator/catch';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {observableToBeFn} from 'rxjs/testing/TestScheduler';

@Injectable()
export class UserService {

  userlist: AngularFireList<any>;
  selecteduser: Object;
  curentuser = this.authservice.currentUserId;
  userprofil: any[];

  constructor(public firebase: AngularFireDatabase, public authservice: AuthService, private toster: ToastrService) {
  }

  getdata() {
    this.userlist = this.firebase.list('User' + this.curentuser);
    console.log(this.userlist);
    return this.userlist;
  }

  getUser() {
    const userlistt = this.firebase.database.ref('User').child(this.curentuser);
    return userlistt.once('value');
  }

  insertUser(user: User) {
    const userlistt = this.firebase.database.ref('User').child(this.curentuser);
    // this.userlist = this.firebase.list('User/' + this.curentuser);
    userlistt.set({
      nom: user.nom,
      prenom: user.prenom,
      nomutulisateur: user.nomutulisateur,
      emailuser: user.emailuser,
      datenaissance: user.datenaissance,
      nationalite: user.nationalite,
      pays: user.pays,
      etatcivil: user.etatcivil,
      profession: user.profession,
      sexe: user.sexe
      // imageuser: user.imageuser
    });
    console.log(User);
  }

  // updateuser(user: User)  {
  //   this.userlist.update(user.$iduser,
  //     {
  //       idauth: this.authservice.currentUserId,
  //       nom: user.nom,
  //       prenom: user.prenom,
  //       nomutulisateur: user.nomutulisateur,
  //       emailuser:  user.emailuser,
  //       datenaissance: user.datenaissance,
  //       nationalite: user.nationalite,
  //       pays: user.pays,
  //   //    etatcivil: user.etatcivil,
  //    //   profession: user.profession,
  //    //   imageuser: user.imageuser
  //     });
  // }
  deleteuser($iduser: string) {
    this.userlist.remove($iduser);
  }
}
