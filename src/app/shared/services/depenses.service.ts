import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Depenses, FileUpload} from '../.../../../shared/models/depenses';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';
import * as firebase from 'firebase';
import {promise} from 'selenium-webdriver';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class DepensesService {
  private storageBasePath = '/Depensesuploads';
 // depensesRef: AngularFireList<Depenses>;
  // depenseRef: AngularFireObject<Depenses>;
  selectedDepense: Depenses = new Depenses();
  selectedDepenseR: Depenses = new Depenses();
  newdepenseKey: string;
  currentUserId = localStorage.getItem('userid');
  depenseslist: AngularFireList <any>;

  constructor(private db: AngularFireDatabase, public authservice: AuthService, private toastr: ToastrService) {
  }
  checkdata(childPath) {
    const depenseslist = this.db.database.ref(childPath).child(this.currentUserId);
    return depenseslist.once('value');
  }
  getDepense(childPath: string) {
    this.depenseslist = this.db.list(childPath + '/' + this.currentUserId);
    return this.depenseslist;
  }
  getnewdepenseKey(childPath: string) {
    return this.newdepenseKey = this.db.database.ref(childPath).child(this.currentUserId).push().key;
  }
  insertDepense(childPath: string, newdepenseKey: string, depenses: Depenses,
                fileUpload: FileUpload, progress: { percentage: number }): void {
    this.newdepenseKey = this.db.database.ref(childPath).child(this.currentUserId).push().key;
    const depenseslist = this.db.database.ref(childPath).child(this.currentUserId).child(newdepenseKey);
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
        depenses.justificatifdepense = fileUpload.url;
        depenseslist.set({
          idauth: this.authservice.currentUserId,
          titredepense: depenses.titredepense,
          montantdepense: depenses.montantdepense,
          datedepense: depenses.datedepense,
          categoriedepense: depenses.categoriedepense,
          descriptiondepense: depenses.descriptiondepense,
          justificatifdepenses: depenses.justificatifdepense
        });
    this.toastr.success('ajouter', 'depense ajoute par succes');
    }
    );
  }
  insertDepenseRecurrent(childPath: string, newdepenseKey: string,
                         depenses: Depenses, fileUpload: FileUpload, progress: { percentage: number }) {
    this.newdepenseKey = this.db.database.ref(childPath).child(this.currentUserId).push().key;
    const depenseslist = this.db.database.ref(childPath).child(this.currentUserId).child(newdepenseKey);
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
        depenses.justificatifdepense = fileUpload.url;
        depenseslist.set({
            idauth: this.authservice.currentUserId,
            titredepense: depenses.titredepense,
            montantdepense: depenses.montantdepense,
            datedepense: depenses.datedepense,
            categoriedepense: depenses.categoriedepense,
            descriptiondepense: depenses.descriptiondepense,
            justificatifdepenses: depenses.justificatifdepense,
            typerep: depenses.typerep,
            active: true,
            jourrep: depenses.jourrep,
            moisrep: depenses.moisrep,
            dateform: depenses.datefrom,
            dateto: depenses.dateto,
            // this.depensesRef.push(depenses);
        });
        this.toastr.success('ajouter', 'depense ajoute par succes');
    });
  }

  updateDepense(depenses: Depenses, childPath: string ) {
    this.depenseslist = this.db.list(childPath + '/' +  this.currentUserId);
    this.depenseslist.update(depenses.$iddepense,
      {
        idauth: this.authservice.currentUserId,
        titredepense: depenses.titredepense,
        montantdepense: depenses.montantdepense,
        datedepense: depenses.datedepense,
        cathegoriedepense: depenses.categoriedepense,
        descriptiondepense: depenses.descriptiondepense,
        //   justificatifdepenses: depenses.justificatifdepense,
      });
    this.toastr.success('modifier', 'depense modifiè par succes');
  }

  updateDepenseRecurrent(depenses: Depenses) {
    this.depenseslist.update(depenses.$iddepense,
      {
        idauth: this.authservice.currentUserId,
        titredepense: depenses.titredepense,
        montantdepense: depenses.montantdepense,
        datedepense: depenses.datedepense,
        categoriedepense: depenses.categoriedepense,
        descriptiondepense: depenses.descriptiondepense,
        //   justificatifdepenses: depenses.justificatifdepense,
        typerep: depenses.typerep,
        // active: depenses.active,
        jourrep: depenses.jourrep,
        moisrep: depenses.moisrep,
        dateform: depenses.datefrom,
        dateto: depenses.dateto
    });
    this.toastr.success('modifier', 'depense modifiè par succes');
  }

  disactivedep(depenses: Depenses, key: string) {
    if (depenses.active) {
      depenses.active = false;
      this.toastr.success('depenses disactivè', 'disactive');
    } else {
      depenses.active = true;
      this.toastr.success('depenses activè', 'active');
    }
    this.depenseslist = this.db.list( 'Depenses/DepensesRecurrent/' +  this.currentUserId);
    console.log(key);
    this.depenseslist.update(key,
      {
        active: depenses.active
      });
  }

  deleteDepense($iddepense: string) {
    //const depenselist = this.db.list(childPath + '/' +  this.currentUserId);
    this.depenseslist.remove($iddepense);
  }

  deleteAllDepense() {
    this.depenseslist.remove();
  }


  getSearchdep(start, end, path: string): Observable<Depenses[]> {
    const chilbath = path + '/' +  this.currentUserId ;
    return this.db.list<Depenses>(chilbath,
      ref => ref.orderByChild('titredepense').limitToFirst(10).startAt(start).endAt(end)
    ).valueChanges();
  }

  getdataauth(path: string) {
    let myUserId = this.currentUserId;
    console.log(myUserId);
    return this.db.list<Depenses>(path,
      ref => ref.orderByChild('idauth').startAt(myUserId).endAt(myUserId + '\uf8ff'));
  }

  getdatadash(path: string, num: number) {
    const chilbath = path + '/' +  this.currentUserId ;
    const depenselist = this.db.list(chilbath);
    return this.db.list<Depenses>(chilbath,
      ref => ref.limitToFirst(num));
  }
  trie(path: string , type: string) {
    const chilbath = path + '/' +  this.currentUserId;
    const depenselist = this.db.list(chilbath);
    return this.db.list<Depenses>(chilbath,
      ref => ref.orderByChild(type)).valueChanges();
  }
}
