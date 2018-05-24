import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Transaction} from '../models/transaction';
import {Depenses} from '../models/depenses';
import {Observable} from 'rxjs/Observable';
import {Revenus} from '../models/revenus';
@Injectable()
export class TransactionService {
  transactionlist: AngularFireList<any>;
  selectedtransaction: Transaction = new Transaction();
  currentUserId = localStorage.getItem('userid');
  constructor(private db: AngularFireDatabase) { }

  getTransaction() {
    this.transactionlist = this.db.list('Transaction/' + this.currentUserId);
    return this.transactionlist;
  }
  insertTransaction(transaction: Transaction, action: object) {
    this.transactionlist = this.db.list('Transaction/' + this.currentUserId);
    transaction.action = action;
    this.transactionlist.push({
      titre: transaction.titre,
      date: transaction.date,
      action: transaction.action,
    });
  }

  updateTransaction(transaction: Transaction) {
    this.transactionlist = this.db.list('Transaction/' + this.currentUserId);
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

  trie(bath: string , type: string) {
    const chilbath = bath + '/' +  this.currentUserId ;
    const depenselist = this.db.list(chilbath);
    return this.db.list<Transaction>(chilbath,
      ref => ref.orderByChild(type)).valueChanges();
  }
  getTrie(start, end): Observable<Transaction[]> {
    const chilbath = 'Transaction/' +  this.currentUserId ;
    return this.db.list<Transaction>(chilbath,
      ref => ref.orderByChild('date').startAt(start).endAt(end)
    ).valueChanges();
  }
}
