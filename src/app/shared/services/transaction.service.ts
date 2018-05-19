import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Transaction} from '../models/transaction';
@Injectable()
export class TransactionService {
  transactionlist: AngularFireList<any>;
  selectedtransaction: Transaction = new Transaction();
  currentUserId = 'qfLQdWnNA5U4IiRQxevRB4Z46bg1';
  constructor(private firebase: AngularFireDatabase) { }

  getTransaction() {
    this.transactionlist = this.firebase.list('Transaction/' + this.currentUserId);
    return this.transactionlist;
  }
  insertTransaction(transaction: Transaction, action: object) {
    this.transactionlist = this.firebase.list('Transaction/' + this.currentUserId);
    transaction.action = action;
    this.transactionlist.push({
      titre: transaction.titre,
      date: transaction.date,
      action: transaction.action,
    });
  }

  updateTransaction(transaction: Transaction) {
    this.transactionlist = this.firebase.list('Transaction/' + this.currentUserId);
    this.transactionlist.update(transaction.$key,
      {
        key: transaction.$key,
        titre: transaction.titre,
        date: transaction.date
      });
  }

  deletetran($key: string) {
    this.transactionlist.remove($key);
  }



}
