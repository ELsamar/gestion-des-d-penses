import { Injectable } from '@angular/core';
import{AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Depenses } from '../.../../../shared/models/depenses';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DepensesService {
  depenseslist: AngularFireList <any>;
  selectedDepense: Depenses = new Depenses();
  constructor(private firebase : AngularFireDatabase) { }
  getDepense (){
    return this.depenseslist = this.firebase.list('depenses');
  }
  insertDepense (depenses: Depenses ) {
    this.depenseslist = this.firebase.list('depenses');
    console.log(depenses);
    this.depenseslist.push({
      titredepense: depenses.titredepense,
      montantdepense: depenses.montantdepense,
      datedepense: depenses.datedepense,
      cathegoriedepense: depenses.cathegoriedepense,
      descriptiondepense: depenses.descriptiondepense,
      justificatifdepenses: depenses.justificatifdepense });
  }
  updateDepense(depenses: Depenses){
    this.depenseslist.update(depenses.$iddepense,
      {
        titredepense:depenses.titredepense,
        montantdepense:depenses.montantdepense,
        datedepense:depenses.datedepense,
        cathegoriedepense:depenses.cathegoriedepense,
        descriptiondepense:depenses.descriptiondepense,
        justificatifdepenses:depenses.justificatifdepense,
      });
  }
  deleteDepense ($iddepense:string){
    this.depenseslist.remove($iddepense);
  }

}
