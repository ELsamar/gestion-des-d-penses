import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from'angularfire2/database';
import { Projets } from '../.../../../shared/models/projets';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjetsService {
  projetlist: AngularFireList <any>;
  selectedprojet:Projets= new Projets();

  constructor(private firebase : AngularFireDatabase) { }
  getProjet (){
    return this.projetlist = this.firebase.list('projets');
  }
  insertProjet (projet :Projets) {
    this.projetlist = this.firebase.list('projets');
    console.log(Projets);
    this.projetlist.push({
      titreprojet:projet.titreprojet,
      montantprojet:projet.montantprojet,
      dateprojet:projet.dateprojet,
      descriptionprojet:projet.descriptionprojet,
      priorteprojet:projet.prioriteprojet, 
    });
  };
  updateProjet(projet :Projets){
    this.projetlist.update(projet.$idprojet,
      {
      titreprojet:projet.titreprojet,
      montantprojet:projet.montantprojet,
      dateprojet:projet.dateprojet,
      descriptionprojet:projet.descriptionprojet,
      priorteprojet:projet.prioriteprojet, 
      });
  }
  deleteProjet ($idprojet:string){
    this.projetlist.remove($idprojet);
  }

}
