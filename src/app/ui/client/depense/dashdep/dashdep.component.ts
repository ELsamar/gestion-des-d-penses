import { Component, OnInit } from '@angular/core';
import {Depenses} from '../../../../shared/models/depenses';
import {DepensesService} from '../../../../shared/services/depenses.service';

@Component({
  selector: 'app-dashdep',
  templateUrl: './dashdep.component.html',
  styleUrls: ['./dashdep.component.css']
})
export class DashdepComponent implements OnInit {
  depenseslist: Depenses[];
  DepensesRlist: Depenses[];
  typeaffich: string;
  startAt: string;
  endAt: string;
  depenses: Depenses[];
  depensesR: Depenses[];
  constructor( private depenseservice: DepensesService) { }

  ngOnInit() {
  this.depenseservice.getdatadash('Depenses/Depenses', 5).snapshotChanges().subscribe(item => {
      this.depenseslist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.depenseslist.push(y as Depenses);
      });
    });
    this.depenseservice.getdatadash('Depenses/DepensesRecurrent', 5).snapshotChanges().subscribe(item => {
      this.DepensesRlist = [];
      item.forEach(element => {
        var T = element.payload.toJSON();
        T['$key'] = element.key;
        this.DepensesRlist.push(T as Depenses);
      });
    });
  }

}
