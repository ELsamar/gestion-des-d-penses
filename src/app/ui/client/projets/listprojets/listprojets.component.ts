import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../../../../shared/services/projets.service';
import {priorite, Projets} from '../../../../shared/models/projets';
import {FormsModule, NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModeleDepense} from '../../../../shared/models/modele-depense';
@Component({
  selector: 'app-listprojets',
  templateUrl: './listprojets.component.html',
  styleUrls: ['./listprojets.component.css']
})
export class ListprojetsComponent implements OnInit {
  priorites: any = ['forte', 'moyenne', 'faible'];
  projetlist: Projets[];
  startAt: string;
  endAt: string;
  constructor(private projetservice: ProjetsService, private toastr: ToastrService, private modalService: NgbModal) { }
  ngOnInit() {
    this.projetservice.checkdata()
      .then(snapshot => {
        if ((snapshot.val())) {
          var p = this.projetservice.getProjet();
          p.snapshotChanges().subscribe(item => {
            this.projetlist = [];
            item.forEach(element => {
              var q = element.payload.toJSON();
              q['$key'] = element.key;
              this.projetlist.push(q as Projets);
            });
          });
        } else {
          this.toastr.warning('vous n"avez encore des Projet', 'vide');
        }
      });

  }
  onDelete(key: string) {
    if (confirm('éte vous sure de supprimer ce projet ?') === true) {
      this.projetservice.deleteProjet(key);
    }
    }
  openWindowCustomClass(content, projet: Projets) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
    this.projetservice.selectedprojet = Object.assign({}, projet);
  }
  onUpdate(projetForm: NgForm) {
    this.projetservice.updateProjet(projetForm.value);
    this.toastr.success('modification', 'modification avec succès');
    // modal clonse
    // else
  }

  onSearchdep(searchText) {
    const text = searchText;
    this.startAt = text;
    this.endAt = text + '\uf8ff';
    this.projetservice.getSearchProjet(this.startAt, this.endAt)
      .subscribe((projet) => this.projetlist = projet);
  }
  onSearch(event) {
    const text = event.target.value;
    this.onSearchdep(text);
  }
}
