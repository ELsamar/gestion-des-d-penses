import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import {TransactionService} from './../../../../shared/transaction.service';
import { Transaction} from '../../../../shared/models/transaction';

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
   // this.transactionservice.getData().snapshotChanges().subscribe(transaction => {
     //   this.transactionList = [];
     //   transaction.forEach(element => {
     //     console.log(element);
     //     const x = element.payload.toJSON();
       //   x['$key'] = element.key;
      //    this.transactionList.push(x);
      //  });
        //*****
  //  console.log(this.transactionservice.getData());
 // const x = this.transactionservice && this.transactionservice.getData() ;
    // console.log(x);
    //  x.snapshotChanges().subscribe(item => {
    //  this.transactionList = [];
    //  item.forEach(element => {
    //   let y = element.payload.toJSON();
    //    y['$key'] = element.key;
    //     this.transactionList.push(y as Transaction);
    //   });
    // } );
  //  let x = this.transactionservice.getData();
    //x.subscribe(snapshot => {
    //console.log(snapshot.key);
   //   console.log(snapshot.val());
   // });
     // });
 }
  onEdit(tran: Transaction) {
    this.transactionservice.selectedtransaction = Object.assign({}, tran);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.transactionservice.deletetran(key);
      this.tostr.warning('Deleted Successfully', ' register');
    }
  }
}
