import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {ModeleRevenus} from '../../../../shared/models/modele-revenus';
import {ModeleRevenusService} from '../../../../shared/services/modele-revenus.service';
import {ModeleDepense} from '../../../../shared/models/modele-depense';

@Component({
  selector: 'app-listmodelsrev',
  templateUrl: './listmodelrevenu.component.html',
  styleUrls: ['./listmodelrevenu.component.css']
})
export class ListmodelrevenuComponent implements OnInit {

  public ModelRevlist: ModeleRevenus[];
  Model: ModeleRevenus [];
  Selectmodel: ModeleRevenus;
  startAt: string;
  endAt: string;
  constructor(private modelerevenusservice: ModeleRevenusService, private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit() {
    var x = this.modelerevenusservice.getdataauth();
    x.snapshotChanges().subscribe(item => {
      this.ModelRevlist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.ModelRevlist.push(y as ModeleRevenus);
      });
    });
  }
  onEdit(model: ModeleRevenus) {
    this.modelerevenusservice.selectedModele = Object.assign({}, model);
    console.log(model);
  }

  onDelete(key: string) {
    if (confirm('éte vous sure de supprimer ce depense ?') === true) {
      this.modelerevenusservice.deleteModeleRevenu(key);
      this.toastr.success('suppression', 'depense supprimée avec succée');
    }
  }
  openWindowCustomClass(content, Modele: ModeleRevenus) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
    this.Selectmodel = Object.assign({}, Modele);
  }
  onSearchdep(searchText) {
    const text = searchText;
    this.startAt = text;
    this.endAt = text + '\uf8ff';
    this.modelerevenusservice.getSearchModeleRevenu(this.startAt , this.endAt)
      .subscribe((model) => this.ModelRevlist = model);
  }
  onSearch(event) {
    const text = event.target.value;
    this.onSearchdep(text);
  }

}
