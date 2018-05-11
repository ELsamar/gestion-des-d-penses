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
  depenseslist: AngularFireList<any>;
  depensesRef: AngularFireList<Depenses>;
  depenseRef: AngularFireObject<Depenses>;
  selectedDepense: Depenses = new Depenses();
  selectedDepenseR: Depenses = new Depenses();

  constructor(private db: AngularFireDatabase, public authservice: AuthService) {
    this.depensesRef = db.list(`${this.basePath}`);
  }

  getDepense(childPath: string) {
    return this.depenseslist = this.db.list(childPath);
  }

  getDepensesimple() {
    return this.depenseslist = this.db.list('depenses/depensessimple');
  }

  insertDepense(childPath: string, depenses: Depenses, fileUpload: FileUpload, progress: { percentage: number }): void {
    this.depenseslist = this.db.list(childPath);
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
        // depenses.coverUrl = fileUpload.url;

        // this.depensesRef.push(depenses);
      }
    );

    this.depenseslist.push({
      idauth: this.authservice.currentUserId,
      titredepense: depenses.titredepense,
      montantdepense: depenses.montantdepense,
      datedepense: depenses.datedepense,
      cathegoriedepense: depenses.cathegoriedepense,
      descriptiondepense: depenses.descriptiondepense,
      //  depcoverUrl: depenses.coverUrl
      //  justificatifdepenses: depenses.justificatifdepense
    });
  }

  insertDepenseRecurrent(childPath: string, depenses: Depenses, fileUpload: FileUpload, progress: { percentage: number }): void {
    this.depenseslist = this.db.list(childPath);
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
        // depenses.coverUrl = fileUpload.url;

        // this.depensesRef.push(depenses);
      }
    );

    this.depenseslist.push({
      idauth: this.authservice.currentUserId,
      titredepense: depenses.titredepense,
      montantdepense: depenses.montantdepense,
      datedepense: depenses.datedepense,
      cathegoriedepense: depenses.cathegoriedepense,
      descriptiondepense: depenses.descriptiondepense,
      //  depcoverUrl: depenses.coverUrl
      //  justificatifdepenses: depenses.justificatifdepense
      typerep: depenses.typerep,
      active: true,
      jourrep: depenses.jourrep,
      moisrep: depenses.moisrep,
      dateform: depenses.datefrom,
      dateto: depenses.dateto
    });
  }

  updateDepense(depenses: Depenses) {
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
    console.log('updateDepense');
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
  }

  deleteDepense($iddepense: string) {
    this.depenseslist.remove($iddepense);
  }

  deleteAllDepense() {
    this.depenseslist.remove();
  }



  getSearchdep(start, end, bath: string): Observable<Depenses[]> {
    return this.db.list<Depenses>(bath,
      ref => ref.orderByChild('titredepense').limitToFirst(10).startAt(start).endAt(end)
    ).valueChanges();
  }
  getdataauth( bath: string) {
    let myUserId = this.authservice.currentUserId;
    console.log(myUserId);
    return this.db.list<Depenses>(bath,
      ref => ref.orderByChild('idauth').startAt(myUserId).endAt(myUserId + '\uf8ff'));
  }
  getdataauthdash(bath: string, num: number) {
    let myUserId = this.authservice.currentUserId;
    console.log(myUserId);
    return this.db.list<Depenses>(bath,
      ref => ref.orderByChild('idauth').limitToFirst(num).startAt(myUserId).endAt(myUserId + '\uf8ff'));
  }
}
