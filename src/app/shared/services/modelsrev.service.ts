import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Modelerev} from '../models/modelerev';
import {AuthService} from '../../providers/auth.service';
import {User} from '../models/user';
import {Revenus} from '../models/revenus';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ModelsrevService {
  Modelelist: AngularFireList<any>;
  selectedModele: Modelerev = new Modelerev() ;

  constructor(private db: AngularFireDatabase, public authservice: AuthService) { }

  insertModeleRev(modele: Modelerev ) {
    this.Modelelist = this.db.list('Modelerev');
    this.Modelelist.push({
      idauth: this.authservice.currentUserId,
      titreModele: modele.titreModele,
      montantModele: modele.montantModele,
      dateModele: modele.dateModele,
      descriptionModele: modele.descriptionModele
    }) ;
  }
  updateModeleRev(modele: Modelerev )  {
    this.Modelelist.update(modele.$idModele,
      {
        titreModele: modele.titreModele,
        montantModele: modele.montantModele,
        dateModele: modele.dateModele,
        descriptionModele: modele.descriptionModele
      });
  }
  deleteModeleRev($idModele: string) {
    this.Modelelist.remove($idModele);
  }
  getSearchModeleRev(start, end): Observable<Modelerev[]> {
    return this.db.list<Modelerev>('ModeleDépense',
      ref => ref.orderByChild('titreModele').startAt(start).endAt(end)
    ).valueChanges();
  }
  getdataauth() {
    let myUserId = this.authservice.currentUserId;
    return this.db.list<Revenus>('ModeleDépense',
      ref => ref.orderByChild('idauth').startAt(myUserId).endAt(myUserId + '\uf8ff'));
  }

}
