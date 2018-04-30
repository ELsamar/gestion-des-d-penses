import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionComponent } from './transaction/transaction.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';
import {Transaction} from '../../../shared/models/transaction';

@NgModule({
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    FormsModule,
  // ToastrModule.forRoot()
  ],
  declarations: [
    TransactionComponent,
    ListTransactionComponent
  ],
})
export class TransactionsModule { }
