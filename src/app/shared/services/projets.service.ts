import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from'angularfire2/database';
import { Projets } from '../.../../../shared/models/projets';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';

@Injectable()
export class ProjetsService {
  projetlist: AngularFireList <any>;
  selectedprojet: Projets = new Projets();

  constructor(private firebase: AngularFireDatabase, public authservice: AuthService) { }
  getProjet () {
    return this.projetlist = this.firebase.list('projets');
  }
  insertProjet (projet: Projets) {
    this.projetlist = this.firebase.list('projets');
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
    this.projetlist.remove($idprojet);
  }

}