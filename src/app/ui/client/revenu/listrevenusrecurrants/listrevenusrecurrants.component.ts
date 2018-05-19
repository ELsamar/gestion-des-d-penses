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
  repetes: any = ['Jamais' , 'Semaine' , 'mois'];
  semaines: any = ['', 'Lundi' , 'Mardi' , 'Mercredi' , 'Jeudi' , 'Vendredi' , 'Samedi' , 'Dimanche'];
  Mois: any = ['', '1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  alerts: any = ['1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  RevenusRlist: Revenus[];
  startAt: string;
  endAt: string;
  revenusR: Revenus[];
  selectedRevenuR: any;
  constructor(private revenuservice: RevenusService, private tostr: ToastrService, private modalService: NgbModal) { }

  ngOnInit() {
    var x = this.revenuservice.getRevenu('Revenus/RevenusRecurrent');
    x.snapshotChanges().subscribe(item => {
      this.RevenusRlist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.RevenusRlist.push(y as Revenus);
      });
    });
  }

  openWindowCustomClass(content, revenu: Revenus) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
    this.selectedRevenuR = Object.assign({}, revenu);
  }


  onDelete(key: string) {
    if (confirm('éte vous sure de supprimer ce revenu ?') === true) {
      this.revenuservice.deleteRevenus(key);
      this.tostr.warning('suppression', 'revenu supprimée avec succée');
    }
  }

  onEdit(revenu: Revenus) {
  this.revenuservice.selectedrevenuR = Object.assign({}, revenu);
  }

  onUpdateR(revenusFormR: NgForm) {
    if (this.revenuservice.updateRevenusRecurrent(revenusFormR.value)) {
      console.log('test');
    }
    this.tostr.success('modification', 'modification avec succès');

    //modal clonse
    // else
  }

  onSearchdep(searchText) {
    const text = searchText;
    this.startAt = text;
    this.endAt = text + '\uf8ff';
    this.revenuservice.getSearchrev(this.startAt, this.endAt, 'Revenus/RevenusRecurrent')
      .subscribe((Revenus) => this.RevenusRlist = this.revenusR);
  }
  onSearch(event) {
    const text = event.target.value;
    this.onSearchdep(text);
  }

}
