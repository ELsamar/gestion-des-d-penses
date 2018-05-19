import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {TransactionService} from '../../../../shared/services/transaction.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private transactionservice: TransactionService, private tostr: ToastrService) {
  }

  ngOnInit() {

  }
}
