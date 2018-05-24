import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {RevenusService} from '../../../../shared/services/revenus.service';
import {Revenus} from '../../../../shared/models/revenus';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listrevenusrecurrants',
  templateUrl: './listrevenusrecurrants.component.html',
  styleUrls: ['./listrevenusrecurrants.component.css']
})
export class ListrevenusrecurrantsComponent implements OnInit {
  categories: any = ['Salaires Net', 'Bourses', 'Remboursements Sécurité Sociale', 'prêt bancaire',
    'allocation familiale', 'Aides diverses', 'avance et acompte'];
  repetes: any = ['Jamais' , 'Semaine' , 'mois'];
  semaines: any = ['', 'Lundi' , 'Mardi' , 'Mercredi' , 'Jeudi' , 'Vendredi' , 'Samedi' , 'Dimanche'];
  Mois: any = ['', '1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  alerts: any = ['1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  RevenusRlist: any[];
  startAt: string;
  endAt: string;
  selectedRevenuR: any;
  constructor(private revenuservice: RevenusService, private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit() {
    this.revenuservice.checkdata('Revenus/RevenusRecurrent')
      .then(snapshot => {
        if ((snapshot.val())) {
          let x = this.revenuservice.getRevenu('Revenus/RevenusRecurrent');
          x.snapshotChanges().subscribe(item => {
            this.RevenusRlist = [];
            item.forEach(element => {
              let y = element.payload.toJSON();
              y['$key'] = element.key;
              this.RevenusRlist.push(y);
            });
          });
        } else {
          this.toastr.warning('vous n"avez encore des Revenus Recurrent ', 'vide');
        }
      });
  }

  openWindowCustomClass(content, revenu: Revenus) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
    this.selectedRevenuR = Object.assign({}, revenu);
  }


  onDelete(key: string) {
    if (confirm('éte vous sure de supprimer ce revenu ?') === true) {
      this.revenuservice.deleteRevenus(key);
      this.toastr.success('suppression', 'revenu supprimée avec succée');
    }
  }

  onEdit(revenu: Revenus) {
  this.revenuservice.selectedrevenuR = Object.assign({}, revenu);
  }

  onUpdateR(revenusFormR: NgForm) {
    this.revenuservice.updateRevenusRecurrent(revenusFormR.value);
    this.toastr.success('modification', 'modification avec succès');

    // modal clonse
    // else
  }

  onSearchdep(searchText) {
    const text = searchText;
    this.startAt = text;
    this.endAt = text + '\uf8ff';
    this.revenuservice.getSearchrev(this.startAt, this.endAt, 'Revenus/RevenusRecurrent')
      .subscribe((revenu) => this.RevenusRlist = revenu);
  }
  onSearch(event) {
    const text = event.target.value;
    this.onSearchdep(text);
  }
  ontrie(type: string) {
    this.revenuservice.trie('Revenus/RevenusRecurrent', type)
      .subscribe((revenu) => this.RevenusRlist = revenu);
  }
}
