import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {DepensesService} from '../../../../shared/services/depenses.service';
import {Depenses} from '../../../../shared/models/depenses';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listdepenses',
  templateUrl: './listdepenses.component.html',
  styleUrls: ['./listdepenses.component.css']
})
export class ListdepensesComponent implements OnInit {
  categories: any = ['Alimentation', 'Transports / Véhicule', 'Loisir', ' Logement',
    'Santé', 'Habillement', 'Assurance', 'Téléphone/Internet', 'Enfants', 'autre'];
  depenseslist: any[];
  typeaffich: string;
  startAt: string;
  endAt: string;
  depenses: Depenses[];

  constructor(private depenseservice: DepensesService, private toastr: ToastrService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.depenseservice.checkdata('Depenses/Depenses')
      .then(snapshot => {
        if ((snapshot.val())) {
          let x = this.depenseservice.getDepense('Depenses/Depenses');
          x.snapshotChanges().subscribe(item => {
            this.depenseslist = [];
            item.forEach(element => {
              let y = element.payload.toJSON();
              y['$key'] = element.key;
              this.depenseslist.push(y);
            });
          });
        } else {
          this.toastr.warning('vous n"avez encore des Depenses ', 'vide');
 }
      });
 }
  checkdata() {
    this.depenseservice.checkdata('Depenses/Depenses').
    then(snapshot => {
      if (snapshot.val()) {
     return true ;
      } else if (!snapshot.val()) {
        return false ;
      }
    });

  }

  openWindowCustomClass(content, depense: Depenses) {
    console.table(depense);
    this.modalService.open(content, {windowClass: 'dark-modal'});
    this.depenseservice.selectedDepense = Object.assign({}, depense);
  }


  onDelete(key: string) {
    if (confirm('éte vous sure de supprimer ce depense ?') === true) {
      this.depenseservice.deleteDepense(key);
      this.toastr.warning('suppression', 'Dépense supprimée avec succée');
    }
  }
  onDeleteAll() {
    if (confirm('Ete vous sure de supprimer toutes tes depenses ?') === true) {
      this.depenseservice.deleteAllDepense();
      this.toastr.warning('suppression', 'Dépense supprimée avec succée');
    }
  }

  onEdit(depense: Depenses) {
    this.depenseservice.selectedDepense = Object.assign({}, depense);
  }

  onUpdate(depenseForm: NgForm) {
    if (this.depenseservice.updateDepense(depenseForm.value, 'Depenses/Depenses')) {
      console.log('test');
    }
    this.toastr.success('modification', 'modification avec succès');

    // modal clonse
    // else
  }

  onSearchdep(searchText) {
    const text = searchText;
    this.startAt = text;
    this.endAt = text + '\uf8ff';
    this.depenseservice.getSearchdep(this.startAt, this.endAt, 'Depenses/Depenses' )
      .subscribe((depenses) => this.depenseslist = depenses);
  }
  onSearch(event) {
    const text = event.target.value;
    this.onSearchdep(text);
  }
 /* ontrie(type: string) {
    this.depenseservice.trie('Depenses/Depenses', type)
    .subscribe((depenses) => this.depenseslist = depenses);
  }*/
}
