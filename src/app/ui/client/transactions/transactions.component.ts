import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../../shared/transaction.service';
import { ToastrService } from 'ngx-toastr';
import {Transaction} from '../../../shared/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private transactionservice: TransactionService, private tostr: ToastrService ) { }

  ngOnInit() {
  }

}
