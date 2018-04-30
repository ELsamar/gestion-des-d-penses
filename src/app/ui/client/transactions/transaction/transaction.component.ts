import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {TransactionService} from './../../../../shared/transaction.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private transactionservice: TransactionService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(transactionForm: NgForm) {
    if (transactionForm.value.$key == null) {
      this.transactionservice.inserttran(transactionForm.value);
    } else {
      this.transactionservice.updatetran(transactionForm.value);
    }
    this.resetForm(transactionForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(transactionForm?: NgForm) {
    if (transactionForm != null) {
      transactionForm.reset();
    }
  //  this.transactionservice.selectedtransaction = {
   ///   $key: null,
   //   titre: '',
   //   date: '',
   //};
  }
}
