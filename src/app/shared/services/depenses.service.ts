import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Depenses, FileUpload} from '../.../../../shared/models/depenses';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';
import * as firebase from 'firebase';

@Injectable()
export class DepensesService {
  private basePath = '/depenses';
  private storageBasePath = '/uploads';
  depenseslist: AngularFireList<any>;
  depensesRef: AngularFireList<Depenses>;
  depenseRef: AngularFireObject<Depenses>;
  selectedDepense: Depenses = new Depenses();

  constructor(private db: AngularFireDatabase, public authservice: AuthService) {
    this.depensesRef = db.list(`${this.basePath}`);
  }

  getDepense() {
    return this.depenseslist = this.db.list('depenses');
  }

  insertDepense(depenses: Depenses, fileUpload: FileUpload, progress: { percentage: number }): void {
    this.depenseslist = this.db.list('depenses');
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
  }

  deleteDepense($iddepense: string) {
    this.depenseslist.remove($iddepense);
  }

  // getdata1(titre: string) {
  //   const myUserId = firebase.auth().currentUser.uid;
  //   const searchdep = firebase.database().ref('depence/' + myUserId).equalTo(titre);
  //   return searchdep;
  // }
  getSearchdep(start, end): Observable<Depenses[]> {
    return this.db.list<Depenses>('/depenses',
        ref => ref.orderByChild('titredepense').limitToFirst(10).startAt(start).endAt(end)
    ).valueChanges();
  }
}
