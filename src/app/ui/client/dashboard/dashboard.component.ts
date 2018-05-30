import { Component, OnInit } from '@angular/core';
import {ListdepensesComponent} from '../depense/listdepenses/listdepenses.component';
import { AmChartsService, AmChart, AmChartsDirective } from '@amcharts/amcharts3-angular';
import { ProjetsService } from '../../../shared/services/projets.service';
import { Projets} from '../../../shared/models/projets';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private AmCharts: AmChartsService,private projetservice: ProjetsService) { }
  priorites: any = ['forte', 'moyenne', 'faible'];
  projetlist: Projets[];
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
            "duration": 890
        }, {
            "date": "2012-01-12",
            "distance": 534,
            "townSize": 18,
            "latitude": 39.74,
            "duration": 810
        }, {
            "date": "2012-01-13",
            "townSize": 12,
            "distance": 425,
            "duration": 670,
            "latitude": 40.75,
            "dashLength": 8,
            "alpha": 0.4
        }, {
            "date": "2012-01-14",
            "latitude": 36.1,
            "duration": 470,
        }],
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
            "position": "right"
        }, {
            "id": "durationAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "inside": true,
            "color":"#8e0404",
            "position": "right",
            "title": "Dépenses"
        }],
        "graphs": [{
            "alphaField": "alpha",
            "balloonText": "[[value]] dinars",
            "dashLengthField": "dashLength",
            "fillAlphas": 0.7,
            "legendPeriodValueText": "total: [[value.sum]]",
            "legendValueText": "[[value]]",
            "title": "Montant",
            "type": "column",
            "valueField": "distance",
            "valueAxis": "distanceAxis"
        }, {
            "balloonText": "Dépenses:[[value]]",
            "bullet": "round",
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