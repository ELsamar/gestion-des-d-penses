import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Transaction} from './models/transaction';
@Injectable()
export class TransactionService {
  transactionlist: AngularFireList<any>;
  selectedtransaction: Transaction = new Transaction();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.transactionlist = this.firebase.list('transaction');
    return this.transactionlist;
  }
  inserttran(transaction: Transaction) {
    this.transactionlist.push({
      key: transaction.$key,
      titre: transaction.titre,
      date: transaction.date
    });
  }

  updatetran(transaction: Transaction) {
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
