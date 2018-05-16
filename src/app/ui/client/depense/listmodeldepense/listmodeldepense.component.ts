import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

import {ModeleDepense} from '../../../../shared/models/modele-depense';
import {ModeleDepenseService} from '../../../../shared/services/modele-depense.service';

@Component({
  selector: 'app-listmodeldepense',
  templateUrl: './listmodeldepense.component.html',
  styleUrls: ['./listmodeldepense.component.css']
})
export class ListmodeldepenseComponent implements OnInit {
 public ModelDepenseslist: ModeleDepense[];
  Model: ModeleDepense [];

  constructor(private modeledepenseservice: ModeleDepenseService, private toastr: ToastrService, private modalService: NgbModal) { }

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
    console.log(model);
  }
}
