import { Component, OnInit ,OnDestroy} from '@angular/core';
import { AmChartsService } from "amcharts3-angular2";
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit,OnDestroy {
  private chart: any;
  constructor(private AmCharts: AmChartsService) { }
  ngOnInit() {

    this.chart = this.AmCharts.makeChart("chartdiv", {
      "theme": "light",
      "type": "serial",
      "dataProvider": [{
          "month": "Janvier",
          "year2004": 3.5,
          "year2005": 4.2
      }, {
          "month": "Fevrier",
          "year2004": 1.7,
          "year2005": 3.1
      }, {
          "month": "Mars",
          "year2004": 2.8,
          "year2005": 2.9
      }, {
          "month": "Avril",
          "year2004": 2.6,
          "year2005": 2.3
      }, {
          "month": "Mai",
          "year2004": 1.4,
          "year2005": 2.1
      }, {
          "month": "Juin",
          "year2004": 2.6,
          "year2005": 4.9
      }, {
          "month": "Juiller",
          "year2004": 6.4,
          "year2005": 7.2
      }, {
          "month": "Aout",
          "year2004": 8,
          "year2005": 7.1
      }, {
          "month": "Decembre",
          "year2004": 9.9,
          "year2005": 10.1
      }],
      "valueAxes": [{
          "stackType": "3d",
          "unit": "%",
          "position": "left",
          "title": "L'evolution des revenus et des dépenses (montant/mois)",
      }],
      "startDuration": 1,
      "graphs": [{
          "balloonText": "GDP grow in [[category]] (2004): <b>[[value]]</b>",
          "fillAlphas": 0.9,
          "lineAlpha": 0.2,
          "title": "2004",
          "type": "column",
          "valueField": "year2004"
      }, {
          "balloonText": "GDP grow in [[category]] (2005): <b>[[value]]</b>",
          "fillAlphas": 0.9,
          "lineAlpha": 0.2,
          "title": "2005",
          "type": "column",
          "valueField": "year2005"
      }],
      "plotAreaFillAlphas": 0.1,
      "depth3D": 60,
      "angle": 30,
      "categoryField": "country",
      "categoryAxis": {
          "gridPosition": "start"
      },
      "export": {
        "enabled": true
       }
  });

  this.chart.path = "/node_modules/amcharts3/amcharts/";
  }
  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

}
