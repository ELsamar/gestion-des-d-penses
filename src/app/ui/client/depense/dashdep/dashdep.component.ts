import { Component, OnInit } from '@angular/core';
import {Depenses} from '../../../../shared/models/depenses';
import {DepensesService} from '../../../../shared/services/depenses.service';

@Component({
  selector: 'app-dashdep',
  templateUrl: './dashdep.component.html',
  styleUrls: ['./dashdep.component.css']
})
export class DashdepComponent implements OnInit {

  cathegories: any = ['Transport/Vehicule', 'Loisir', ' Eléctricité'];
  repetes: any = ['Jamais' , 'Semaine' , 'mois'];
  semaines: any = ['', 'Lundi' , 'Mardi' , 'Mercredi' , 'Jeudi' , 'Vendredi' , 'Samedi' , 'Dimanche'];
  Mois: any = ['', '1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  alerts: any = ['1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  depenseslist: Depenses[];
  DepensesRlist: Depenses[];
  typeaffich: string;
  startAt: string;
  endAt: string;
  depenses: Depenses[];
  depensesR: Depenses[];
  constructor( private depenseservice: DepensesService) { }

  ngOnInit() {
  this.depenseservice.getdataauthdash('Depenses/Depenses', 5).snapshotChanges().subscribe(item => {
      this.depenseslist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.depenseslist.push(y as Depenses);
      });
    });
    this.depenseservice.getdataauthdash('Depenses/DepensesRecurrent', 5).snapshotChanges().subscribe(item => {
      this.DepensesRlist = [];
      item.forEach(element => {
        var T = element.payload.toJSON();
        T['$key'] = element.key;
        this.DepensesRlist.push(T as Depenses);
      });
    });
  }

}
