import { Injectable } from '@angular/core';
import{AngularFireDatabase, AngularFireList, AngularFireObject} from'angularfire2/database';
import { Revenus,FileUpload } from '../.../../../shared/models/revenus';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';
import * as firebase from 'firebase';
@Injectable()
export class RevenusService {
  revenuslist: AngularFireList <any>;
  justificatifrevenu: File;
  private basePath = '/revenus';
  private storageBasePath = '/Revenusuploads';
  revenusRef: AngularFireList<Revenus>;
  revenuRef: AngularFireObject<Revenus>;
  selectedrevenu: Revenus = new Revenus();
  selectedrevenuR: Revenus = new Revenus();
  newrevenusKey: string;
  currentUserId = 'qfLQdWnNA5U4IiRQxevRB4Z46bg1';
  constructor(private db: AngularFireDatabase, public authservice: AuthService) {
    this.revenusRef = db.list(`${this.basePath}`);
  }
  checkdata(childPath) {
    const revenuslist = this.db.database.ref(childPath).child(this.authservice.currentUserId);
    return revenuslist.once('value').then();
  }
  getRevenu(childPath: string) {
    this.revenuslist = this.db.list(childPath + '/' +  this.currentUserId);
    return this.revenuslist;
  }
  getnewrevenusKey(childPath: string) {
    return this.newrevenusKey = this.db.database.ref(childPath).child(this.currentUserId).push().key;
  }
  /*getRevenu () {
    return this.revenuslist = this.db.list('revenus');
  }*/
  insertrevenus(childPath: string, newrevenusKey: string, revenus:Revenus,
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
revenus.coverUrl = fileUpload.url;
revenuslist.set({
idauth: this.authservice.currentUserId,
titrerevenu: revenus.titrerevenu,
montantrevenu: revenus.montantrevenu,
daterevenu: revenus.daterevenu,
descriptionrevenu: revenus.descriptionrevenu,
justificatifrevenu: revenus.coverUrl
});
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
revenus.coverUrl = fileUpload.url;
revenuslist.set({
idauth: this.authservice.currentUserId,
titrerevenu: revenus.titrerevenu,
montantrevenu: revenus.montantrevenu,
daterevenu: revenus.daterevenu,
descriptionrevenu: revenus.descriptionrevenu,
justificatifrevenus: revenus.coverUrl,
typerep: revenus.typerep,
active: true,
jourrep: revenus.jourrep,
moisrep: revenus.moisrep,
dateform: revenus.datefrom,
dateto: revenus.dateto
}
);


});
}

updateRevenuS(revenus: Revenus, childPath: string ) {
const revenulist = this.db.list(childPath + '/' +  this.currentUserId);
this.revenuslist.update(revenus.$idrevenu,
{
idauth: this.authservice.currentUserId,
titrerevenu: revenus.titrerevenu,
montantrevenu: revenus.montantrevenu,
daterevenu: revenus.daterevenu,
descriptionrevenu: revenus.descriptionrevenu,
}).then((response) => {
if (response) {
return true;
} else {
return false;
}
});
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
}).then((response) => {
if (response) {
return true;
} else {
return false;
}
});
}

disactivedep(revenus: Revenus) {
  revenus.active = false;
this.revenuslist.update(revenus.$idrevenu,
{
idauth: this.authservice.currentUserId,
active: revenus.active
});
}

deleteRevenus($idrevenu: string,) {
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
let myUserId = this.authservice.currentUserId;
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

}
