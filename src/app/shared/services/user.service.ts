import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from'angularfire2/database';
import { User } from '../.../../../shared/models/user';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class UserService {
  userlist: AngularFireList <any>;
  constructor(private firebase : AngularFireDatabase) { }
  getUser (){
    return this.userlist = this.firebase.list('user');
  }
  enregistrerUser (user :User) {
    this.userlist = this.firebase.list('user');
    console.log(User);
    this.userlist.push({ 
    nom:user.nom ,
    prenom : user.prenom ,
    username : user.username,
    email : user.email ,
    sexe : user.sexe ,
    datenais : user.datenais,
    nationalite : user.nationalite,
    pays : user.pays,
    etatcivil : user.etatcivil,
    profission : user.profission,
    });
  };

}
