import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import {TransactionService} from './../../../../shared/transaction.service';
import { Transaction} from './../../../../shared/transaction';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {
  transactionList: Transaction[];

  constructor(private transactionservice: TransactionService, private tostr: ToastrService) {
  }

  ngOnInit() {
  // let x = this.transactionservice.getData();
    // x.snapshotChanges().subscribe(item => {
    // this.transactionList = [];
     // item.forEach(element => {
      // let y = element.payload.toJSON();
      // y['$key'] = element.key;
      // this.transactionList.push(y as Transaction);
     // });
    } //);
  //  let x = this.transactionservice.getData();
 //   x.subscribe(snapshot => {
      //console.log(snapshot.key);
   //   console.log(snapshot.val());
   // });
 // }
  onEdit(tran: Transaction) {
    this.transactionservice.selectedtransaction = Object.assign({}, tran);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.transactionservice.deleteEmployee(key);
      this.tostr.warning('Deleted Successfully', 'Employee register');
    }
  }
}
