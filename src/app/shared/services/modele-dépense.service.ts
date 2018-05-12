import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {ModeleDépense} from '../models/modele-dépense';
import {AuthService} from '../../providers/auth.service';
import {User} from '../models/user';
import {Depenses} from '../models/depenses';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ModeleDépenseService {
  Modelelist: AngularFireList<any>;
  selectedModele: ModeleDépense = new ModeleDépense();

  constructor(private db: AngularFireDatabase, public authservice: AuthService) { }

  insertModeleDépense(modele: ModeleDépense ) {
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
  updateModeleDépense(modele: ModeleDépense )  {
    this.Modelelist.update(modele.$idModele,
      {
        titreModele: modele.titreModele,
        montantModele: modele.montantModele,
        dateModele: modele.dateModele,
        cathegorieModele: modele.cathegorieModele,
        descriptionModele: modele.descriptionModele
      });
  }
  deleteModeleDépense($idModele: string) {
    this.Modelelist.remove($idModele);
  }
  getSearchModeleDépense(start, end): Observable<ModeleDépense[]> {
    return this.db.list<ModeleDépense>('ModeleDépense',
      ref => ref.orderByChild('titreModele').startAt(start).endAt(end)
    ).valueChanges();
  }
  getdataauth() {
    let myUserId = this.authservice.currentUserId;
    return this.db.list<Depenses>('ModeleDépense',
      ref => ref.orderByChild('idauth').startAt(myUserId).endAt(myUserId + '\uf8ff'));
  }

}
