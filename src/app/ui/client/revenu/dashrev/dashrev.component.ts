import { Component, OnInit } from '@angular/core';
import { RevenusService } from '../../../../shared/services/revenus.service';
import {Revenus} from '../../../../shared/models/revenus';
@Component({
  selector: 'app-dashrev',
  templateUrl: './dashrev.component.html',
  styleUrls: ['./dashrev.component.css']
})
export class DashrevComponent implements OnInit {
  revenuslist: Revenus[];
  revenusRlist: Revenus[];
  typeaffich: string;
  startAt: string;
  endAt: string;
  revenus: Revenus[];
  revenusR: Revenus[];

  constructor( private revenuservice: RevenusService) { }

  ngOnInit() {
    this.revenuservice.getdatadash('Revenus/Revenus', 5).snapshotChanges().subscribe(item => {
        this.revenuslist = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y['$key'] = element.key;
          console.log(y);
          this.revenuslist.push(y as Revenus);
        });
      });
      this.revenuservice.getdatadash('Revenus/RevenusRecurrent', 5).snapshotChanges().subscribe(item => {
        this.revenusRlist = [];
        item.forEach(element => {
          var T = element.payload.toJSON();
          T['$key'] = element.key;
          this.revenusRlist.push(T as Revenus);
        });
      });
    }

}
