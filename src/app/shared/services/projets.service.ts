import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from'angularfire2/database';
import { Projets } from '../.../../../shared/models/projets';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';
import {promise} from 'selenium-webdriver';
import {ModeleDepense} from '../models/modele-depense';

@Injectable()
export class ProjetsService {
  projetlist: AngularFireList <any>;
  selectedprojet: Projets = new Projets();
  currentUserId = 'qfLQdWnNA5U4IiRQxevRB4Z46bg1';
  constructor(private firebase: AngularFireDatabase, public authservice: AuthService) { }
  getProjet () {
    return this.projetlist = this.firebase.list('Projets/' + this.currentUserId);
  }
  insertProjet (projet: Projets) {
    const bath = ('Projets/' + this.currentUserId);
    this.projetlist = this.firebase.list(bath);
    this.projetlist.push({
      idauth: this.authservice.currentUserId,
      titreprojet: projet.titreprojet,
      montantprojet: projet.montantprojet,
      dateprojet: projet.dateprojet,
      descriptionprojet: projet.descriptionprojet,
      priorteprojet: projet.prioriteprojet,
    });
  }
  updateProjet(projet: Projets) {
    this.projetlist = this.firebase.list('Projets/' + this.currentUserId);
    this.projetlist.update(projet.$idprojet,
      {
        idauth: this.authservice.currentUserId,
      titreprojet: projet.titreprojet,
      montantprojet: projet.montantprojet,
      dateprojet: projet.dateprojet,
      descriptionprojet: projet.descriptionprojet,
      priorteprojet: projet.prioriteprojet,
      });
  }
  deleteProjet ($idprojet: string) {
    this.projetlist = this.firebase.list('Projets/' + this.currentUserId);
    this.projetlist.remove($idprojet);
  }
  getSearchProjet(start, end): Observable<Projets[]> {
    const bath = ('Projets/' +  this.currentUserId);
    return this.firebase.list<Projets>(bath,
      ref => ref.orderByChild('titreprojet').startAt(start).endAt(end)
    ).valueChanges();
  }
}
