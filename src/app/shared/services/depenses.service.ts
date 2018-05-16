import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Depenses, FileUpload} from '../.../../../shared/models/depenses';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';
import * as firebase from 'firebase';

@Injectable()
export class DepensesService {
  private basePath = '/depenses';
  private storageBasePath = '/Depensesuploads';
  depensesRef: AngularFireList<Depenses>;
  depenseRef: AngularFireObject<Depenses>;
  selectedDepense: Depenses = new Depenses();
  selectedDepenseR: Depenses = new Depenses();
  newdepenseKey: string;
  currentUserId = 'qfLQdWnNA5U4IiRQxevRB4Z46bg1';
  depenseslist: AngularFireList <any> ;
  constructor(private db: AngularFireDatabase, public authservice: AuthService) {
    this.depensesRef = db.list(`${this.basePath}`);
  }
  checkdata(childPath) {
    const depenseslist = this.db.database.ref(childPath).child(this.authservice.currentUserId);
    return depenseslist.once('value').then();
  }
  getDepense(childPath: string) {
    this.depenseslist = this.db.list(childPath + '/' +  this.currentUserId);
    return this.depenseslist;
  }
  getnewdepenseKey(childPath: string) {
    return this.newdepenseKey = this.db.database.ref(childPath).child(this.currentUserId).push().key;
  }

  // getDepense(childPath: string) {
  //   return this.depenseslist = this.db.list(childPath);
  // }

  insertDepense(childPath: string, newdepenseKey: string, depenses: Depenses,
                fileUpload: FileUpload, progress: { percentage: number }): void {
    this.newdepenseKey = this.db.database.ref(childPath).child(this.currentUserId).push().key;
    const depenseslist = this.db.database.ref(childPath).child(this.currentUserId).child(newdepenseKey);
    // depenseslist = this.db.list(childPath);
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
        depenses.coverUrl = fileUpload.url;
        depenseslist.set({
          idauth: this.authservice.currentUserId,
          titredepense: depenses.titredepense,
          montantdepense: depenses.montantdepense,
          datedepense: depenses.datedepense,
          cathegoriedepense: depenses.cathegoriedepense,
          descriptiondepense: depenses.descriptiondepense,
          justificatifdepenses: depenses.coverUrl
        });
      }
    );
  }
  insertDepenseRecurrent(childPath: string, newdepenseKey: string,
                         depenses: Depenses, fileUpload: FileUpload, progress: { percentage: number }): void {
    this.newdepenseKey = this.db.database.ref(childPath).child(this.currentUserId).push().key;
    const depenseslist = this.db.database.ref(childPath).child(this.currentUserId).child(newdepenseKey);
   // this.depenseslist = this.db.list(childPath);
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
        depenses.coverUrl = fileUpload.url;
        depenseslist.set({
            idauth: this.authservice.currentUserId,
            titredepense: depenses.titredepense,
            montantdepense: depenses.montantdepense,
            datedepense: depenses.datedepense,
            cathegoriedepense: depenses.cathegoriedepense,
            descriptiondepense: depenses.descriptiondepense,
            justificatifdepenses: depenses.coverUrl,
            typerep: depenses.typerep,
            active: true,
            jourrep: depenses.jourrep,
            moisrep: depenses.moisrep,
            dateform: depenses.datefrom,
            dateto: depenses.dateto
            // this.depensesRef.push(depenses);
          }
      );


      });
  }

  updateDepense(depenses: Depenses, childPath: string ) {
    const depenselist = this.db.list(childPath + '/' +  this.currentUserId);
    this.depenseslist.update(depenses.$iddepense,
      {
        idauth: this.authservice.currentUserId,
        titredepense: depenses.titredepense,
        montantdepense: depenses.montantdepense,
        datedepense: depenses.datedepense,
        cathegoriedepense: depenses.cathegoriedepense,
        descriptiondepense: depenses.descriptiondepense,
        //   justificatifdepenses: depenses.justificatifdepense,
      }).then((response) => {
      if (response) {
        return true;
      } else {
        return false;
      }
    });
  }

  updateDepenseRecurrent(depenses: Depenses) {
    this.depenseslist.update(depenses.$iddepense,
      {
        idauth: this.authservice.currentUserId,
        titredepense: depenses.titredepense,
        montantdepense: depenses.montantdepense,
        datedepense: depenses.datedepense,
        cathegoriedepense: depenses.cathegoriedepense,
        descriptiondepense: depenses.descriptiondepense,
        //   justificatifdepenses: depenses.justificatifdepense,
        typerep: depenses.typerep,
        // active: depenses.active,
        jourrep: depenses.jourrep,
        moisrep: depenses.moisrep,
        dateform: depenses.datefrom,
        dateto: depenses.dateto
      }).then((response) => {
      if (response) {
        return true;
      } else {
        return false;
      }
    });
  }

  disactivedep(depenses: Depenses) {
    depenses.active = false;
    this.depenseslist.update(depenses.$iddepense,
      {
        idauth: this.authservice.currentUserId,
        active: depenses.active
      });
  }

  deleteDepense($iddepense: string,) {
    //const depenselist = this.db.list(childPath + '/' +  this.currentUserId);
    this.depenseslist.remove($iddepense);
  }

  deleteAllDepense() {
    this.depenseslist.remove();
  }


  getSearchdep(start, end, bath: string): Observable<Depenses[]> {
    const chilbath = bath + '/' +  this.currentUserId ;
    return this.db.list<Depenses>(chilbath,
      ref => ref.orderByChild('titredepense').limitToFirst(10).startAt(start).endAt(end)
    ).valueChanges();
  }

  getdataauth(bath: string) {
    let myUserId = this.authservice.currentUserId;
    console.log(myUserId);
    return this.db.list<Depenses>(bath,
      ref => ref.orderByChild('idauth').startAt(myUserId).endAt(myUserId + '\uf8ff'));
  }

  getdatadash(bath: string, num: number) {
    const chilbath = bath + '/' +  this.currentUserId ;
    const depenselist = this.db.list(chilbath);
    return this.db.list<Depenses>(chilbath,
      ref => ref.limitToFirst(num));
  }
}
