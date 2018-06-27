import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList}from'angularfire2/database';
import { Projets } from '../.../../../shared/models/projets';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';
import {promise} from 'selenium-webdriver';
import {ModeleDepense} from '../models/modele-depense';
import {Revenus} from '../models/revenus';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class ProjetsService {
  projetlist: AngularFireList <any>;
  selectedprojet: Projets = new Projets();
  currentUserId = localStorage.getItem('userid');
  i: number;
  constructor(private firebase: AngularFireDatabase, public authservice: AuthService, private toastr: ToastrService) {}
  checkdata() {
    const depenseslist = this.firebase.database.ref('Projets').child(this.currentUserId);
    return depenseslist.once('value');
  }
  getProjet () {
    return this.projetlist = this.firebase.list('Projets/' + this.currentUserId);
  }
  insertProjet (projet: Projets) {
    const path = ('Projets/' + this.currentUserId );
    this.projetlist = this.firebase.list(path);
    this.projetlist.push({
      idauth: this.authservice.currentUserId,
      titreprojet: projet.titreprojet,
      montantprojet: projet.montantprojet,
      dateprojet: projet.dateprojet,
      descriptionprojet: projet.descriptionprojet,
      priorteprojet: projet.prioriteprojet,
      faite: false
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
        faite: false
      });
  }
  deleteProjet ($idprojet: string) {
    this.projetlist = this.firebase.list('Projets/' + this.currentUserId);
    this.projetlist.remove($idprojet);
  }
  getSearchProjet(start, end): Observable<Projets[]> {
    const path = ('Projets/' + this.currentUserId);
    return this.firebase.list<Projets>(path,
      ref => ref.orderByChild('titreprojet').startAt(start).endAt(end)
    ).valueChanges();
  }
  doneProjet(projet: Projets, key: string) {
    if (projet.faite) {
      projet.faite = false;
      this.toastr.warning('Mais t\'inquiète pas vous pouvez le faire ultérieurement', 'Désolée');
    } else {
      projet.faite = true;
      this.toastr.success('Bravo pour votre realisation de projet', 'Félicitation');
    }
    this.projetlist.update(key,
      {
        active: projet.faite
      });
  }
}
