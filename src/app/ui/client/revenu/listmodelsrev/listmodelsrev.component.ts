import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {Modelerev} from '../../../../shared/models/modelerev';
import {ModelsrevService} from '../../../../shared/services/modelsrev.service';
@Component({
  selector: 'app-listmodelsrev',
  templateUrl: './listmodelsrev.component.html',
  styleUrls: ['./listmodelsrev.component.css']
})
export class ListmodelsrevComponent implements OnInit {

  public ModelRevlist: Modelerev[];
  Model: Modelerev [];

  constructor(private modelerevservice: ModelsrevService, private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit() {
    var x = this.modelerevservice.getdataauth();
    x.snapshotChanges().subscribe(item => {
      this.ModelRevlist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        console.log(y);
        this.ModelRevlist.push(y as Modelerev);
      });
    });
  }
  onEdit(model: Modelerev) {
    this.modelerevservice.selectedModele = Object.assign({}, model);
    console.log(model);
  }

}
