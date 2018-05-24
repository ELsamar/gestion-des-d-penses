import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../../shared/services/transaction.service';
import { ToastrService } from 'ngx-toastr';

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
