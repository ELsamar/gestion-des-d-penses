import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {User} from '../.../../../shared/models/user';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';
import {_catch} from 'rxjs/operator/catch';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {observableToBeFn} from 'rxjs/testing/TestScheduler';
import {Depenses, FileUpload} from '../models/depenses';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  private storageBasePath = '/Useruploads';
  userlist: AngularFireList<any>;
  selecteduser: Object;
  currentUserId = localStorage.getItem('userid');
  userprofil: any[];
userpict = 'https://firebasestorage.googleapis.com/v0/b/pfe2018-f27c8.appspot.com/o/' +
  'uploads%2Fprofil.png?alt=media&token=d5a2dd55-8e36-4bfe-b2ec-c02c5f3b1c73'
  constructor(public db: AngularFireDatabase, public authservice: AuthService, private toster: ToastrService) {
  }

  getdata() {
    this.userlist = this.db.list('User' + this.currentUserId);
    console.log(this.userlist);
    return this.userlist;
  }

  getUser() {
    const userlistt = this.db.database.ref('User').child(this.currentUserId);
    return userlistt.once('value');
  }

  insertUser(user: User) {
    const userlistt = this.db.database.ref('User').child(this.currentUserId);
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
      sexe: user.sexe,
      imageuser: this.userpict
    });
    console.log(User);
  }

  updateuser(user: User)  {
    const userlistt = this.db.database.ref('User').child(this.currentUserId);
   userlistt.set({
        nom: user.nom,
        prenom: user.prenom,
        nomutulisateur: user.nomutulisateur,
        emailuser:  user.emailuser,
        datenaissance: user.datenaissance,
        nationalite: user.nationalite,
        pays: user.pays,
       etatcivil: user.etatcivil,
       profession: user.profession,
     //  imageuser: user.imageuser
      });
  }
  deleteuser($iduser: string) {
    this.userlist.remove($iduser);
  }
  uploadeimage(user: User, fileUpload: FileUpload, progress: { percentage: number }): void {

    const userlistt = this.db.database.ref('User').child(this.currentUserId);
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.storageBasePath}/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        // fail
        console.log(error);
        console.log('err');
      },
      () => {
        // success
        fileUpload.url = uploadTask.snapshot.downloadURL;
        fileUpload.name = fileUpload.file.name;
        user.imageuser = fileUpload.url;
        userlistt.update({
          imageuser : user.imageuser
        });
        this.toster.success('Image', 'image telecharger');
      }
    );
  }
}
