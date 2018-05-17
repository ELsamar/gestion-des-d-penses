import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {ModeleDepense} from '../models/modele-depense';
import {AuthService} from '../../providers/auth.service';
import {User} from '../models/user';
import {Depenses} from '../models/depenses';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ModeleDepenseService {
  Modelelist: AngularFireList<any>;
  selectedModele: ModeleDepense = new ModeleDepense() ;

  constructor(private db: AngularFireDatabase, public authservice: AuthService) { }

  insertModeleDepense(modele: ModeleDepense ) {
    this.Modelelist = this.db.list('ModeleDépense');
    this.Modelelist.push({
      idauth: this.authservice.currentUserId,
      titreModele: modele.titreModele,
    montantModele: modele.montantModele,
    dateModele: modele.dateModele,
    cathegorieModele: modele.cathegorieModele,
    descriptionModele: modele.descriptionModele
    }) ;
  }
  updateModeleDepense(modele: ModeleDepense )  {
    this.Modelelist.update(modele.$idModele,
      {
        titreModele: modele.titreModele,
        montantModele: modele.montantModele,
        dateModele: modele.dateModele,
        cathegorieModele: modele.cathegorieModele,
        descriptionModele: modele.descriptionModele
      });
  }
  deleteModeleDepense($idModele: string) {
    this.Modelelist.remove($idModele);
  }
  getSearchModeleDepense(start, end): Observable<ModeleDepense[]> {
    return this.db.list<ModeleDepense>('ModeleDépense',
      ref => ref.orderByChild('titreModele').startAt(start).endAt(end)
    ).valueChanges();
  }
  getdataauth() {
    let myUserId = this.authservice.currentUserId;
    return this.db.list<Depenses>('ModeleDépense',
      ref => ref.orderByChild('idauth').startAt(myUserId).endAt(myUserId + '\uf8ff'));
  }

}