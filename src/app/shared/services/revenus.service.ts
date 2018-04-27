import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from'angularfire2/database';
import { Revenus } from '../.../../../shared/models/revenus';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class RevenusService {
  revenuslist: AngularFireList <any>;
  selectedRevenu:Revenus= new Revenus();
  constructor(private firebase : AngularFireDatabase) { }
  getRevenu (){
    return this.revenuslist = this.firebase.list('revenus');
  }
  insertRevenu (revenus :Revenus) {
    this.revenuslist = this.firebase.list('revenus');
    console.log(revenus);
    this.revenuslist.push({
      titrerevenu:revenus.titrerevenu,
      montantrevenu:revenus.montantrevenu,
      daterevenu:revenus.daterevenu,
      descriptionrevenu:revenus.descriptionrevenu,
      justificatifrevenu:revenus.justificatifrevenu, 
    });
  };
  updateRevenu(revenus :Revenus){
    this.revenuslist.update(revenus.$idrevenu,
      {
        titrerevenu:revenus.titrerevenu,
        montantrevenu:revenus.montantrevenu,
        daterevenu:revenus.daterevenu,
        descriptionrevenu:revenus.descriptionrevenu,
        justificatifrevenu:revenus.justificatifrevenu,
      });
  }
  deleteRevenu ($idrevenu:string){
    this.revenuslist.remove($idrevenu);
  }

}
