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
  depenseslist: Depenses[];
  startAt: string;
  endAt: string;
  depensesR: Depenses[];
  constructor(private depenseservice: DepensesService, private tostr: ToastrService, private modalService: NgbModal) { }

  ngOnInit() {
  }

}
