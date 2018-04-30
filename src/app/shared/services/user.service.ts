import { Injectable } from '@angular/core';
<<<<<<< HEAD
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

=======
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { User} from '../.../../../shared/models/user';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';

@Injectable()
export class UserService {
  userlist: AngularFireList <any>;
  selectedUser: User = new User();
  constructor(private firebase: AngularFireDatabase , private authservice: AuthService ) { }
  getUser() {
    return this.userlist = this.firebase.list('User');
  }
  insertUser (user: User ) {
    this.userlist = this.firebase.list('User');
    this.userlist.push({
      idauth: this.authservice.currentUserId,
    nom: user.nom,
    prenom: user.prenom,
    nomutulisateur: user.nomutulisateur,
    emailuser:  user.emailuser,
    datenaissance: user.datenaissance,
    nationalite: user.nationalite,
    pays: user.pays,
//    etatcivil: user.etatcivil,
    profession: user.profession,
   // imageuser: user.imageuser
    }) ;
    console.log(User);
  }
  updateuser(user: User)  {
    this.userlist.update(user.$iduser,
      {
        idauth: this.authservice.currentUserId,
        nom: user.nom,
        prenom: user.prenom,
        nomutulisateur: user.nomutulisateur,
        emailuser:  user.emailuser,
        datenaissance: user.datenaissance,
        nationalite: user.nationalite,
        pays: user.pays,
    //    etatcivil: user.etatcivil,
     //   profession: user.profession,
     //   imageuser: user.imageuser
      });
  }
  deleteuser($iduser: string) {
    this.userlist.remove($iduser);
  }
>>>>>>> master
}
