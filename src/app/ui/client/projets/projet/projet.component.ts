import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../../../../shared/services/projets.service';
import {Projets } from '../../../../shared/models/projets';
import {FormsModule, NgForm} from '@angular/forms';
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css'],
  providers: [
    ProjetsService,
    ],
})
export class ProjetComponent implements OnInit {
  priorites :any = ["forte" , "moyenne" , "faible"];
  constructor(private projetservice:ProjetsService) { }
  currentprojet: Projets;
  ngOnInit() {
    this.currentprojet = new Projets();
      this.currentprojet.$idprojet = null;
      this.currentprojet.dateprojet = null;
      this.currentprojet.montantprojet= null;
      this.currentprojet.titreprojet = null;
      this.currentprojet.descriptionprojet = null;
      this.currentprojet.prioriteprojet = null;
  }
  onSubmit(projetForm: NgForm) {
    this.projetservice.insertProjet(projetForm.value);
}


}
