import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {ModeleRevenus} from '../models/modele-revenus';
import {AuthService} from '../../providers/auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ModeleRevenusService {
  Modelelist: AngularFireList<any>;
  selectedModele: ModeleRevenus = new ModeleRevenus() ;
  currentUserId = localStorage.getItem('userid');
  constructor(private db: AngularFireDatabase, public authservice: AuthService) { }
  checkdata() {
    const Modelelist = this.db.database.ref('ModeleRevenus').child(this.currentUserId);
    return Modelelist.once('value');
  }
  insertModeleRevenu(modele: ModeleRevenus ) {
    this.Modelelist = this.db.list('ModeleRevenus/' + this.currentUserId);
    this.Modelelist.push({
      idauth: this.authservice.currentUserId,
      titreModele: modele.titreModele,
      montantModele: modele.montantModele,
      dateModele: modele.dateModele,
      descriptionModele: modele.descriptionModele
    }) ;
  }
  updateModeleRevenu(modele: ModeleRevenus )  {
    this.Modelelist = this.db.list('ModeleRevenus/' + this.currentUserId);
    this.Modelelist.update(modele.$idModele,
      {
        titreModele: modele.titreModele,
        montantModele: modele.montantModele,
        dateModele: modele.dateModele,
        descriptionModele: modele.descriptionModele
      });
  }
  deleteModeleRevenu($idModele: string) {
    this.Modelelist = this.db.list('ModeleRevenus/' + this.currentUserId);
    this.Modelelist.remove($idModele);
  }
  getSearchModeleRevenu(start, end): Observable<ModeleRevenus[]> {
    const bath = ('ModeleRevenus/' +  this.currentUserId);
    return this.db.list<ModeleRevenus>(bath,
      ref => ref.orderByChild('titreModele').startAt(start).endAt(end)
    ).valueChanges();
  }
  getdataauth() {
    return this.Modelelist = this.db.list('ModeleRevenus/' + this.currentUserId);
  }
  // getdataauth() {
  //   const bath = ('ModeleRevenus/' +  this.currentUserId);
  //   let myUserId = this.authservice.currentUserId;
  //   return this.db.list<ModeleRevenus>(bath,
  //     ref => ref.orderByChild('idauth').startAt(myUserId).endAt(myUserId + '\uf8ff'));
  // }

}
