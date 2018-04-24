import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from'angularfire2/database';
import { Revenus } from '../.../../../shared/models/revenus';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class RevenusService {
  revenuslist: AngularFireList <any>;
  selectedRevenu:Revenus= new Revenus();
  constructor(private firebase : AngularFireDatabase) { }
  getDepense (){
    return this.revenuslist = this.firebase.list('revenus');
  }
  insertDepense (revenus :Revenus) {
    this.revenuslist = this.firebase.list('revenus');
    console.log(revenus);
    this.revenuslist.push({
      titrerevenu:revenus.titrerevenu,
      montantrevenu:revenus.montantrevenu,
      daterevenu:revenus.daterevenu,
      cathegorierevenu:revenus.cathegorierevenu,
      descriptionrevenu:revenus.descriptionrevenu,
      justificatifrevenu:revenus.justificatifrevenu, 
    });
  };
  updateDepense(revenus :Revenus){
    this.revenuslist.update(revenus.$idrevenu,
      {
        titrerevenu:revenus.titrerevenu,
        montantrevenu:revenus.montantrevenu,
        daterevenu:revenus.daterevenu,
        cathegorierevenu:revenus.cathegorierevenu,
        descriptionrevenu:revenus.descriptionrevenu,
        justificatifrevenu:revenus.justificatifrevenu,
      });
  }
  deleteDepense ($idrevenu:string){
    this.revenuslist.remove($idrevenu);
  }

}
