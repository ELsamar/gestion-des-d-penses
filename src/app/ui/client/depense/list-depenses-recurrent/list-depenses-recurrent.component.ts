import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {DepensesService} from '../../../../shared/services/depenses.service';
import {Depenses} from '../../../../shared/models/depenses';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-depenses-recurrent',
  templateUrl: './list-depenses-recurrent.component.html',
  styleUrls: ['./list-depenses-recurrent.component.css']
})
export class ListDepensesRecurrentComponent implements OnInit {
  categories: any = ['Alimentation', 'Transports / Véhicule', 'Loisir', ' Logement',
    'Santé', 'Habillement', 'Assurance', 'Téléphone/Internet', 'Enfants', 'autre'];
  repetes: any = ['Jamais' , 'Semaine' , 'mois'];
  semaines: any = ['', 'Lundi' , 'Mardi' , 'Mercredi' , 'Jeudi' , 'Vendredi' , 'Samedi' , 'Dimanche'];
  Mois: any = ['', '1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  alerts: any = ['1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  DepensesRlist: {Depenses}[];
  startAt: string;
  endAt: string;
  depensesR: {Depenses}[];
  selectedDepenseR: any;
  constructor(private depenseservice: DepensesService, private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit() {
    this.depenseservice.checkdata('Depenses/DepensesRecurrent')
      .then(snapshot => {
        if ((snapshot.val())) {
          const x = this.depenseservice.getDepense('Depenses/DepensesRecurrent');
          x.snapshotChanges().subscribe(item => {
            this.DepensesRlist = [];
            item.forEach(element => {
              const y = element.payload.toJSON();
              y['$key'] = element.key;
              this.DepensesRlist.push(y as {Depenses} );
            });
          });
        } else {
          this.toastr.warning('vous n"avez encore des Depenses Recurrent', 'vide');}
      });
  }
  openWindowCustomClass(content, depense: Depenses) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
    this.selectedDepenseR = Object.assign({}, depense);
  }


  onDelete(key: string) {
    if (confirm('éte vous sure de supprimer ce depense ?') === true) {
      this.depenseservice.deleteDepense(key);
      this.toastr.warning('suppression', 'depense supprimée avec succée');
    }
  }
  onDeleteAll() {
    if (confirm('éte vous sure de supprimer toutes tes depenses ?') === true) {
      this.depenseservice.deleteAllDepense();
      this.toastr.warning('suppression', 'Depense supprimée avec succée');
    }
  }

  onEdit(depense: Depenses) {
    this.depenseservice.selectedDepenseR = Object.assign({}, depense);
  }

  onUpdateR(depensesFormR: NgForm) {
    if (this.depenseservice.updateDepenseRecurrent(depensesFormR.value)) {
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
    this.depenseservice.getSearchdep(this.startAt, this.endAt, 'Depenses/DepensesRecurrent')
      .subscribe((depenses) => this.DepensesRlist = depenses);
  }
  onSearch(event) {
    const text = event.target.value;
    this.onSearchdep(text);
  }
  ontrie(type: string) {
    this.depenseservice.trie('Depenses/DepensesRecurrent', type)
      .subscribe((depenses) => this.DepensesRlist = depenses);
  }
}
