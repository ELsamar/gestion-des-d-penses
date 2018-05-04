import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from'angularfire2/database';
import { Revenus } from '../.../../../shared/models/revenus';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';
@Injectable()
export class RevenusService {
  revenuslist: AngularFireList <any>;
  justificatifrevenu: File;
  constructor(private firebase: AngularFireDatabase , public authservice: AuthService ) { }
  getRevenu () {
    return this.revenuslist = this.firebase.list('revenus');
  }
  insertRevenu (revenus: Revenus) {
    this.revenuslist = this.firebase.list('revenus');
    this.revenuslist.push({
      idauth: this.authservice.currentUserId,
      titrerevenu: revenus.titrerevenu,
      montantrevenu: revenus.montantrevenu,
      daterevenu: revenus.daterevenu,
      descriptionrevenu: revenus.descriptionrevenu,
    //  justificatifrevenu: revenus.justificatifrevenu,
    });
  }
  updateRevenu(revenus: Revenus) {
    this.revenuslist.update(revenus.$idrevenu,
      {
        idauth: this.authservice.currentUserId,
        titrerevenu: revenus.titrerevenu,
        montantrevenu: revenus.montantrevenu,
        daterevenu: revenus.daterevenu,
        descriptionrevenu: revenus.descriptionrevenu,
        //justificatifrevenu: revenus.justificatifrevenu,
       // justificatifrevenu: revenus.justificatifrevenu,
      });
  }
  deleteRevenu ($idrevenu: string) {
    this.revenuslist.remove($idrevenu);
  }

}
