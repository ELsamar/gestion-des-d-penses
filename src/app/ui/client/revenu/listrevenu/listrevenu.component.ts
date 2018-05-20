import { Component, OnInit } from '@angular/core';
import { Revenus } from '../../../../shared/models/revenus';
import { RevenusService } from '../../../../shared/services/revenus.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-revenulist',
  templateUrl: './listrevenu.component.html',
  styleUrls: ['./listrevenu.component.css']
})
export class ListrevenuComponent implements OnInit {
  revenuslist: Revenus[];
  categories: any = ['Salaires Net', 'Bourses', 'Remboursements Sécurité Sociale', 'prêt bancaire',
    'allocation familiale', 'Aides diverses', 'avance et acompte'];
  constructor(private revenuservice: RevenusService, private tostr: ToastrService, private modalService: NgbModal) { }


  typeaffich: string;
  startAt: string;
  endAt: string;
  revenus: Revenus[];
  ngOnInit() {
    var x = this.revenuservice.getRevenu('Revenus/Revenus');
    x.snapshotChanges().subscribe(item => {
      this.revenuslist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.revenuslist.push(y as Revenus);
      });
    });

  }
  openWindowCustomClass(content, revenu: Revenus) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
    this.revenuservice.selectedrevenu = Object.assign({}, revenu);
  }


  onDelete(key: string) {
    if (confirm('éte vous sure de supprimer ce revenu ?') === true) {
      this.revenuservice.deleteRevenus(key);
      this.tostr.warning('suppression', 'revenu supprimée avec succée');
    }
  }

  onEdit(revenu: Revenus) {
  this.revenuservice.selectedrevenu = Object.assign({}, revenu);
  }

  onUpdate(revenusForm: NgForm) {
    this.revenuservice.updateRevenu( 'Revenus/Revenus', revenusForm.value);
    this.tostr.success('modification', 'modification avec succès');
    //modal clonse
    // else
  }

  onSearchdep(searchText) {
    const text = searchText;
    this.startAt = text;
    this.endAt = text + '\uf8ff';
    this.revenuservice.getSearchrev(this.startAt, this.endAt, 'Revenus/Revenus')
      .subscribe((revenu) => this.revenuslist = revenu);
  }
  onSearch(event) {
    const text = event.target.value;
    this.onSearchdep(text);
  }
  ontrie(type: string) {
    this.revenuservice.trie('Revenus/Revenus', type)
      .subscribe((revenu) => this.revenuslist = revenu);
  }

}
