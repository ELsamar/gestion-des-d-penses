import { Component, OnInit } from '@angular/core';
import { Revenus } from '../../../../shared/models/revenus';
import { RevenusService } from '../../../../shared/services/revenus.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-revenulist',
  templateUrl: './revenulist.component.html',
  styleUrls: ['./revenulist.component.css']
})
export class RevenulistComponent implements OnInit {
  revenuslist: Revenus[];
  constructor(private revenuservice: RevenusService, private tostr: ToastrService, private modalService: NgbModal) { }
  repetes: any = ['Jamais' , 'Semaine' , 'mois'];
  semaines: any = ['', 'Lundi' , 'Mardi' , 'Mercredi' , 'Jeudi' , 'Vendredi' , 'Samedi' , 'Dimanche'];
  Mois: any = ['', '1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  alerts: any = ['1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  
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
    if (this.revenuservice.updateRevenusRecurrent(revenusForm.value)) {
      console.log('test');
    }
    this.tostr.success('modification', 'modification avec succès');

    //modal clonse
    // else
  }

  onSearchrev(searchText) {
    const text = searchText;
    this.startAt = text;
    this.endAt = text + '\uf8ff';
    this.revenuservice.getSearchrev(this.startAt, this.endAt, 'Revenus/Revenus')
      .subscribe((Revenus) => this.revenuslist = this.revenus);
  }
  onSearch(event) {
    const text = event.target.value;
    this.onSearch(text);
  }


}
