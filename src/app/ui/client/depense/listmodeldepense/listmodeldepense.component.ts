import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

import {ModeleDepense} from '../../../../shared/models/modele-depense';
import {ModeleDepenseService} from '../../../../shared/services/modele-depense.service';
import {Depenses} from '../../../../shared/models/depenses';

@Component({
  selector: 'app-listmodeldepense',
  templateUrl: './listmodeldepense.component.html',
  styleUrls: ['./listmodeldepense.component.css']
})
export class ListmodeldepenseComponent implements OnInit {
  public ModelDepenseslist: ModeleDepense[];
  Model: ModeleDepense [];
  Selectmodel: ModeleDepense;
  startAt: string;
  endAt: string;
  constructor(private modeledepenseservice: ModeleDepenseService, private toastr: ToastrService, private modalService: NgbModal) {
  }

  ngOnInit() {
    var x = this.modeledepenseservice.getdataauth();
    x.snapshotChanges().subscribe(item => {
      this.ModelDepenseslist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        console.log(y);
        this.ModelDepenseslist.push(y as ModeleDepense);
      });
    });
  }

  onEdit(model: ModeleDepense) {
    this.modeledepenseservice.selectedModele = Object.assign({}, model);
  }

  onDelete(key: string) {
    if (confirm('éte vous sure de supprimer ce depense ?') === true) {
      this.modeledepenseservice.deleteModeleDepense(key);
      this.toastr.success('suppression', 'depense supprimée avec succée');
    }
  }
  openWindowCustomClass(content, Modele: ModeleDepense) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
    this.Selectmodel = Object.assign({}, Modele);
  }
  onSearchdep(searchText) {
    const text = searchText;
    this.startAt = text;
    this.endAt = text + '\uf8ff';
    this.modeledepenseservice.getSearchModeleDepense(this.startAt , this.endAt )
      .subscribe((model) => this.ModelDepenseslist = model);
  }
  onSearch(event) {
    const text = event.target.value;
    this.onSearchdep(text);
  }
}
