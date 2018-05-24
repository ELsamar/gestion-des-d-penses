import { Component, OnInit } from '@angular/core';
import {isMoment, calendarFormat, Locale, locale} from 'moment';
import { ToastrService } from 'ngx-toastr';
import {TransactionService} from '../../../../shared/services/transaction.service';
import { Transaction} from '../../../../shared/models/transaction';



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
   moment = require('moment');

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
    const start = '18-' + m + '-2018';
    const end = '19-' + m + '-2018' ;
    this.transactionservice.getTrie( start, end)
      .subscribe((transaction) => this.transactionList = transaction);
  }
getweek() {
const d = this.moment().format('L');
console.log(d);

const f = this.moment().subtract( 10, 'days').calendar();
  console.log(f);
}
filtrer() {
    console.log(this.st);
    console.log(this.ed);
  this.transactionservice.getTrie(this.st, this.ed)
    .subscribe((transaction) => this.transactionList = transaction);
}
}
