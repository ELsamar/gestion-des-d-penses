import { Injectable } from '@angular/core';
import{AngularFireDatabase, AngularFireList, AngularFireObject} from'angularfire2/database';
import { Revenus,FileUpload } from '../.../../../shared/models/revenus';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';
import * as firebase from 'firebase';
import {Depenses} from '../models/depenses';
import {ToastrService} from 'ngx-toastr';
@Injectable()
export class RevenusService {
  revenuslist: AngularFireList <any>;
  private storageBasePath = '/Revenusuploads';
  selectedrevenu: Revenus = new Revenus();
  selectedrevenuR: Revenus = new Revenus();
  newrevenusKey: string;
  currentUserId = localStorage.getItem('userid');
  constructor(private db: AngularFireDatabase, public authservice: AuthService, private toaster: ToastrService) {}
  checkdata(childPath) {
    const revenuslist = this.db.database.ref(childPath).child(this.currentUserId);
    return revenuslist.once('value').then();
  }
  getRevenu(childPath: string) {
    this.revenuslist = this.db.list(childPath + '/' + this.currentUserId);
    return this.revenuslist;
  }
  getnewrevenusKey(childPath: string) {
    return this.newrevenusKey = this.db.database.ref(childPath).child(this.currentUserId).push().key;
  }
  insertrevenus(childPath: string, newrevenusKey: string, revenus: Revenus,
    fileUpload: FileUpload, progress: { percentage: number }): void {
        this.newrevenusKey = this.db.database.ref(childPath).child(this.currentUserId).push().key;
        const revenuslist = this.db.database.ref(childPath).child(this.currentUserId).child(newrevenusKey);
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
          },
          () => {
// success
fileUpload.url = uploadTask.snapshot.downloadURL;
fileUpload.name = fileUpload.file.name;
revenus.justificatifrevenu = fileUpload.url;
revenuslist.set({
idauth: this.authservice.currentUserId,
titrerevenu: revenus.titrerevenu,
montantrevenu: revenus.montantrevenu,
daterevenu: revenus.daterevenu,
categorierevenu: revenus.categorierevenu,
descriptionrevenu: revenus.descriptionrevenu,
justificatifrevenu: revenus.justificatifrevenu

});
this.toaster.success('Ajouter', 'Revenu ajoutè avec succes');
}
);
}
insertrevenusRecurrent(childPath: string, newrevenusKey: string,
  revenus: Revenus, fileUpload: FileUpload, progress: { percentage: number }): void {
this.newrevenusKey = this.db.database.ref(childPath).child(this.currentUserId).push().key;
const revenuslist = this.db.database.ref(childPath).child(this.currentUserId).child(newrevenusKey);

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
},
() => {
// success
fileUpload.url = uploadTask.snapshot.downloadURL;
fileUpload.name = fileUpload.file.name;
revenus.justificatifrevenu = fileUpload.url;
revenuslist.set({
idauth: this.authservice.currentUserId,
titrerevenu: revenus.titrerevenu,
montantrevenu: revenus.montantrevenu,
daterevenu: revenus.daterevenu,
categorierevenu: revenus.categorierevenu,
descriptionrevenu: revenus.descriptionrevenu,
justificatifrevenu: revenus.justificatifrevenu,
typerep: revenus.typerep,
active: true,
jourrep: revenus.jourrep,
moisrep: revenus.moisrep,
dateform: revenus.datefrom,
dateto: revenus.dateto
});

  this.toaster.success('Ajouter', 'Revenu ajoutè avec succes');
});
}
  gettotalrevenu() {
    return 252688;
  }
updateRevenu( childPath: string, revenus: Revenus, ) {
  this.revenuslist = this.db.list(childPath + '/' +  this.currentUserId);
this.revenuslist.update(revenus.$idrevenu,
{
idauth: this.authservice.currentUserId,
titrerevenu: revenus.titrerevenu,
montantrevenu: revenus.montantrevenu,
daterevenu: revenus.daterevenu,
descriptionrevenu: revenus.descriptionrevenu,
  categorierevenu: revenus.categorierevenu
});
  this.toaster.success('Modifier', 'Revenu modifier avec succes');
}

updateRevenusRecurrent(revenus: Revenus) {
this.revenuslist.update(revenus.$idrevenu,
{
idauth: this.authservice.currentUserId,
titrerevenu: revenus.titrerevenu,
montantrevenu: revenus.montantrevenu,
daterevenu: revenus.daterevenu,
descriptionrevenu: revenus.descriptionrevenu,
typerep: revenus.typerep,
jourrep: revenus.jourrep,
moisrep: revenus.moisrep,
dateform: revenus.datefrom,
dateto: revenus.dateto
});
  this.toaster.success('Modifier', 'Revenu modifier avec succes');
}

disactiveRev(revenus: Revenus, key: string) {
  if (revenus.active) {
    revenus.active = false;
    this.toaster.success('Revenu ' + revenus.titrerevenu + ' disactiver', 'Disactiver');
  } else {
    revenus.active = true;
    this.toaster.success('Revenu ' + revenus.titrerevenu + ' activer' , 'Activer');
  }
  this.revenuslist.update(key,
    {
      active: revenus.active
    });
}

deleteRevenus($idrevenu: string) {
this.revenuslist.remove($idrevenu);
}

deleteAllRevenus() {
this.revenuslist.remove();
}


getSearchrev(start, end, bath: string): Observable<Revenus[]> {
const chilbath = bath + '/' +  this.currentUserId ;
return this.db.list<Revenus>(chilbath,
ref => ref.orderByChild('titrerevenu').limitToFirst(10).startAt(start).endAt(end)
).valueChanges();
}

getdataauth(bath: string) {
let myUserId = this.currentUserId;
console.log(myUserId);
return this.db.list<Revenus>(bath,
ref => ref.orderByChild('idauth').startAt(myUserId).endAt(myUserId + '\uf8ff'));
}

getdatadash(bath: string, num: number) {
const chilbath = bath + '/' +  this.currentUserId ;
const revenulist = this.db.list(chilbath);
return this.db.list<Revenus>(chilbath,
ref => ref.limitToFirst(num));
}
  trie(bath: string , type: string) {
    const chilbath = bath + '/' +  this.currentUserId ;
    const depenselist = this.db.list(chilbath);
    return this.db.list(chilbath,
      ref => ref.orderByChild(type)).valueChanges();
  }

}
