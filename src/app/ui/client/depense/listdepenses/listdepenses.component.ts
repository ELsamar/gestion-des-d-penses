import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DepensesService } from '../../../../shared/services/depenses.service';
import { Depenses } from '../../../../shared/models/depenses';
@Component({
  selector: 'app-listdepenses',
  templateUrl: './listdepenses.component.html',
  styleUrls: ['./listdepenses.component.css']
})
export class ListdepensesComponent implements OnInit {
  depenseslist: Depenses[];
  constructor(private depenseservice: DepensesService) { }

  ngOnInit() {
    var x = this.depenseservice.getDepense();
    x.snapshotChanges().subscribe(item => {
      this.depenseslist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.depenseslist.push(y as Depenses);
      });
    });
  }
  onDelete(key: string) {
    if (confirm('éte vous sure de supprimer ce projet ?') === true) {
      this.depenseservice.deleteDepense(key);
    }
    }
}
