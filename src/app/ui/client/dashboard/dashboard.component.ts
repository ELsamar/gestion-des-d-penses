import { Component, OnInit } from '@angular/core';
import {ListdepensesComponent} from '../depense/listdepenses/listdepenses.component';
import { AmChartsService, AmChart, AmChartsDirective } from '@amcharts/amcharts3-angular';
import { ProjetsService } from '../../../shared/services/projets.service';
import { Projets} from '../../../shared/models/projets';
import { DepensesService } from '../../../shared/services/depenses.service';
import { Depenses} from '../../../shared/models/depenses';
import { RevenusService } from '../../../shared/services/revenus.service';
import { TransactionService } from '../../../shared/services/transaction.service';
import { Revenus} from '../../../shared/models/revenus';
import { Transaction } from '../../../shared/models/transaction';
import { Action } from 'rxjs/scheduler/Action';
import { Title } from '@angular/platform-browser';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private AmCharts: AmChartsService, private projetservice: ProjetsService , private depenseservice: DepensesService ,
              private revenuservice: RevenusService, private toastr: ToastrService) { }
   totaldep: any;
  totalrev: any;
  budget: any;
  priorites: any = ['forte', 'moyenne', 'faible'];
  projetlist: Projets[];
  depenseslist: Depenses[];
  DepensesRlist: Depenses[];
  typeaffich: string;
  startAt: string;
  endAt: string;
  depenses: Depenses[];
  depensesR: Depenses[];
  revenuslist: Revenus[];
  revenusRlist: Revenus[];
  revenus: Revenus[];
  calculchart = true ;
  ngOnInit() {
    this.projetservice.checkdata()
      .then(snapshot => {
        if ((snapshot.val())) {
          var p = this.projetservice.getProjet();
          p.snapshotChanges().subscribe(item => {
            this.projetlist = [];
            item.forEach(element => {
              var q = element.payload.toJSON();
              q['$key'] = element.key;
              this.projetlist.push(q as Projets);
            });
          });
        }
      });
      this.depenseservice.checkdata('Depenses/Depenses')
      .then(snapshot => {
      if ((snapshot.val())) {
        this.depenseservice.getdatadash('Depenses/Depenses', 5).snapshotChanges().subscribe(item => {
          this.depenseslist = [];
          item.forEach(element => {
            let y = element.payload.toJSON();
            y['$key'] = element.key;
            this.depenseslist.push(y as Depenses);
          });
        });
        this.depenseservice.getdatadash('Depenses/DepensesRecurrent', 5).snapshotChanges().subscribe(item => {
          this.DepensesRlist = [];
          item.forEach(element => {
            let T = element.payload.toJSON();
            T['$key'] = element.key;
            this.DepensesRlist.push(T as Depenses);
          });
        });
        this.totaldep = this.depenseservice.gettotaldep();
   } else {
        this.totaldep = 0;
      }
      });
      this.revenuservice.checkdata('Revenus/Revenus')
        .then(snapshot => {
          if ((snapshot.val())) {
      this.revenuservice.getdatadash('Revenus/Revenus', 5).snapshotChanges().subscribe(item => {
          this.revenuslist = [];
          item.forEach(element => {
            let y = element.payload.toJSON();
            y['$key'] = element.key;
            this.revenuslist.push(y as Revenus);
          });
        });
            this.revenuservice.getdatadash('Revenus/RevenusRecurrent', 5).snapshotChanges().subscribe(item => {
              this.revenusRlist = [];
              item.forEach(element => {
                let T = element.payload.toJSON();
                T['$key'] = element.key;
                this.revenusRlist.push(T as Revenus);
              });
            });
            this.totalrev = this.revenuservice.gettotalrevenu();
            this.budget = this.totalrev - this.totaldep ;
      } else {
            this.totalrev = 0 ;
            this.budget = this.totalrev - this.totaldep ;
            this.calculchart = false;
          } });

      var chart = this.AmCharts.makeChart("chartdiv", {
        "type": "serial",
        "theme": "light",
        "legend": {
            "equalWidths": false,
            "useGraphSettings": true,
            "valueAlign": "left",
            "valueWidth": 120
        },
        "dataProvider": [{
            "date": "2012-01-01",
            "distance": 227,
            "townSize": 25,
            "latitude": 40.71,
            "duration": 408
        }, {
            "date": "2012-01-02",
            "distance": 371,
            "townSize": 14,
            "latitude": 38.89,
            "duration": 482
        }, {
            "date": "2012-01-03",
            "distance": 433,
            "townSize": 6,
            "latitude": 34.22,
            "duration": 562
        }, {
            "date": "2012-01-04",
            "distance": 345,
            "townSize": 7,
            "latitude": 30.35,
            "duration": 379
        }, {
            "date": "2012-01-05",
            "distance": 480,
            "townSize": 10,
            "latitude": 25.83,
            "duration": 501
        }, {
            "date": "2012-01-06",
            "distance": 386,
            "townSize": 7,
            "latitude": 30.46,
            "duration": 443
        }, {
            "date": "2012-01-07",
            "distance": 348,
            "townSize": 10,
            "latitude": 29.94,
            "duration": 405
        }, {
            "date": "2012-01-08",
            "distance": 238,
            "townSize": 16,
            "latitude": 29.76,
            "duration": 309
        }, {
            "date": "2012-01-09",
            "distance": 218,
            "townSize": 17,
            "latitude": 32.8,
            "duration": 287
        }, {
            "date": "2012-01-10",
            "distance": 349,
            "townSize": 11,
            "latitude": 35.49,
            "duration": 485
        }, {
            "date": "2012-01-11",
            "distance": 603,
            "townSize": 10,
            "latitude": 39.1,
            "duration": 890,
        }, {
          "date": "2012-01-12",
          "distance": 60,
          "townSize": 9,
          "latitude": 30.1,
          "duration": 800,
        },],
        "valueAxes": [{
            "id": "distanceAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left",
            "title": "Montant"
        }, {
            "id": "latitudeAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "labelsEnabled": false,
           /* "position": "right"*/
        }, {
            "id": "durationAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "inside": false,
            "position": "right",
            "title": "Dépenses/Revenus"
        }],
        "graphs": [{
            "alphaField": "alpha",
            "balloonText": "[[value]] dinars",
            "dashLengthField": "dashLength",
            "fillAlphas": 0.7,
            "legendPeriodValueText": "total: [[value.sum]]",
            "legendValueText": "[[value]]",
            "lineColor":"#0489B1",
            "title": "Montant",
            "type": "column",
            "valueField": "distance",
            "valueAxis": "distanceAxis"
        }, {
            "balloonText": "Dépenses:[[value]]",
            "color": "#ff0000",
            "bullet": "round",
            "lineColor":"#d80f0f",
            "bulletBorderAlpha": 1,
            "useLineColorForBulletBorder": true,
            "bulletColor": "#FFFFFF",
            "bulletSizeField": "townSize",
            "dashLengthField": "dashLength",
            "descriptionField": "townName",
            "labelPosition": "right",
            "labelText": "[[townName2]]",
            "legendValueText": "[[value]]/[[description]]",
            "title": "Dépenses",
            "fillAlphas": 0,
            "valueField": "latitude",
            "valueAxis": "latitudeAxis"
        }, {
            "bullet": "square",
            "bulletBorderAlpha": 1,
            "bulletBorderThickness": 1,
            "dashLengthField": "dashLength",
            "legendValueText": "[[value]]",
            "lineColor":"#1c8e42",
            "title": "Revenus",
            "fillAlphas": 0,
            "valueField": "duration",
            "valueAxis": "durationAxis"
        }],
        "chartCursor": {
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": 0.1,
            "cursorColor":"#000000",
             "fullWidth":true,
            "valueBalloonsEnabled": false,
            "zoomable": false
        },
        "dataDateFormat": "YYYY-MM-DD",
        "categoryField": "date",
        "categoryAxis": {
            "dateFormats": [{
                "period": "DD",
                "format": "DD"
            }, {
                "period": "WW",
                "format": "MMM DD"
            }, {
                "period": "MM",
                "format": "MMM"
            }, {
                "period": "YYYY",
                "format": "YYYY"
            }],
            "parseDates": true,
            "autoGridCount": false,
            "axisColor": "#555555",
            "gridAlpha": 0.1,
            "gridColor": "#FFFFFF",
            "gridCount": 50
        },
        "export": {
          "enabled": true
         }
    });
    let chartprojet = this.AmCharts.makeChart("projetchart", {
      "type": "pie",
      "radius": 100,
      "fontSize": 8,
      "theme": "light",
      "dataProvider": [{
        "categorie": 'Projet faite',
        "litres":   5
      }, {
        "categorie": 'projet non faite',
        "litres": 10
      }],
      "valueField": "litres",
      "titleField": "categorie",
      "balloon": {
        /*"fixedPosition": true*/}})
    }
}

