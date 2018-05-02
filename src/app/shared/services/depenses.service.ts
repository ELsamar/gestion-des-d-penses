import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
 import { Depenses } from '../.../../../shared/models/depenses';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';

@Injectable()
export class DepensesService {
  depenseslist: AngularFireList <any>;
  selectedDepense: Depenses = new Depenses();
  constructor(private firebase: AngularFireDatabase, public authservice: AuthService) { }

  getDepense () {
    return this.depenseslist = this.firebase.list('depenses');
  }
  insertDepense (depenses: Depenses ) {
    this.depenseslist = this.firebase.list('depenses');
    this.depenseslist.push({
      idauth: this.authservice.currentUserId,
      titredepense: depenses.titredepense,
      montantdepense: depenses.montantdepense,
      datedepense: depenses.datedepense,
      cathegoriedepense: depenses.cathegoriedepense,
      descriptiondepense: depenses.descriptiondepense,
      justificatifdepenses: depenses.justificatifdepense });
  }
  updateDepense(depenses: Depenses)  {
    this.depenseslist.update(depenses.$iddepense,
      {
       idauth: this.authservice.currentUserId,
        titredepense: depenses.titredepense,
        montantdepense: depenses.montantdepense,
        datedepense: depenses.datedepense,
        cathegoriedepense: depenses.cathegoriedepense,
        descriptiondepense: depenses.descriptiondepense,
        justificatifdepenses: depenses.justificatifdepense,
      });
  }
  deleteDepense ($iddepense: string) {
    this.depenseslist.remove($iddepense);
  }
  // getdata1(titre: string) {
  //   const myUserId = firebase.auth().currentUser.uid;
  //   const searchdep = firebase.database().ref('depence/' + myUserId).equalTo(titre);
  //   return searchdep;
  // }
}
