import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import {TransactionService} from '../../../shared/services/transaction.service';
import { Transaction} from '../../../shared/models/transaction';



@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {
  transactionList: Transaction[];
action: object[];
st: string;
ed: string;
  constructor(private transactionservice: TransactionService, private tostr: ToastrService) {
  }

  ngOnInit() {
    var x = this.transactionservice.getTransaction();
    x.snapshotChanges().subscribe(item => {
      this.transactionList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.transactionList.push(y as Transaction);
      });
    });
 }
  getMonth() {
    const y = new Date().getFullYear();
    const m = (new Date().getMonth() ) + 1 ;
    const start = '01-' + m + '-2018';
    const end = '30-' + m + '-2018' ;
    this.transactionservice.getTrie( start, end)
      .subscribe((transaction) => this.transactionList = transaction);
  }
getweek() {
  let now = moment().format('L');
const f = moment().subtract( 10, 'days').calendar();
  this.transactionservice.getTrie('25-6-2018', '30-6-2018')
    .subscribe((transaction) => this.transactionList = transaction);
}
filtrer() {
    console.log(this.st);
    console.log(this.ed);
  this.transactionservice.getTrie(this.st, this.ed)
    .subscribe((transaction) => this.transactionList = transaction);
}
}
