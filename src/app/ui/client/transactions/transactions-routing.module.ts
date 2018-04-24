import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListTransactionComponent} from './list-transaction/list-transaction.component';
import {TransactionComponent} from './transaction/transaction.component';

const routes: Routes = [
  {
    path: 't' ,
    component: TransactionComponent
  },
  {
    path: 'listT' ,
    component: ListTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
