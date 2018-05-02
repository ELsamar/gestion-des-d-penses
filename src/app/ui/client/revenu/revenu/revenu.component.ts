import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import {AuthService} from '../../../../providers/auth.service';
import {RevenusService} from '../../../../shared/services/revenus.service';
import {Revenus} from '../../../../shared/models/revenus';
import {FormGroup, NgForm} from '@angular/forms';
@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.css']
})
export class RevenuComponent implements OnInit {
  revenusForm: FormGroup;
  currentrevenus: Revenus;
  constructor(private revenuservice: RevenusService, public authservice: AuthService ) { }

  ngOnInit() {
    this.currentrevenus = new Revenus();
  }
  onSubmit(revenusForm: NgForm) {
    this.revenuservice.insertRevenu(revenusForm.value);
  }
}
