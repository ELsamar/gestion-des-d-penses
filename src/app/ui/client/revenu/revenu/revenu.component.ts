import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import {AuthService} from '../../../../providers/auth.service';
import {RevenusService} from '../../../../shared/services/revenus.service';
import {Revenus} from '../../../../shared/models/revenus';
import {FormGroup, NgForm} from '@angular/forms';
import {TransactionService} from '../../../../shared/services/transaction.service';
import {Transaction} from '../../../../shared/models/transaction';
import {Depenses} from '../../../../shared/models/depenses';
@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.css']
})
export class RevenuComponent implements OnInit {
  revenusForm: FormGroup;
  currentrevenus: Revenus;
  constructor(private revenuservice: RevenusService, public authservice: AuthService, private transactionservice: TransactionService) { }

  ngOnInit() {
    this.currentrevenus = new Revenus();
  }
async  onSubmit(revenusForm: NgForm) {
    await this.revenuservice.insertRevenu(revenusForm.value);
    this.savetransaction('revenus', this.currentrevenus );
  }
  savetransaction(titre: string , revenus: Revenus) {
    const transaction = new Transaction();
    const d = new Date().getDate();
    const m = (new Date().getMonth()) + 1 ;
    const y = new Date().getFullYear();
    transaction.date = d + '-' + m + '-' + y;
    console.log(transaction.date);
    transaction.titre = titre;
    this.transactionservice.insertTransaction(transaction, revenus);
  }
}
