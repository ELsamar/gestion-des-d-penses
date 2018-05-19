import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import {TransactionService} from '../../../../shared/services/transaction.service';
import { Transaction} from '../../../../shared/models/transaction';
import {Depenses} from '../../../../shared/models/depenses';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {
  transactionList: Transaction[];
action: object[];
  constructor(private transactionservice: TransactionService, private tostr: ToastrService) {
  }

  ngOnInit() {
    var x = this.transactionservice.getTransaction();
    x.snapshotChanges().subscribe(item => {
      this.transactionList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        console.log(y);
        console.log(y.action.titredepense);
        this.transactionList.push(y as Transaction);
      });
    });
 }

}
