import { Component, OnInit ,OnDestroy,ViewChild} from '@angular/core';
import { AmChartsService, AmChart, AmChartsDirective } from '@amcharts/amcharts3-angular';
import {TransactionService} from '../../../shared/services/transaction.service';
import {Transaction} from '../../../shared/models/transaction';
import {DepensesService} from '../../../shared/services/depenses.service';
import {RevenusService} from '../../../shared/services/revenus.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database/interfaces';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private chart: any;
  data: Observable<any[]>;
  ref: AngularFireList<any>;
  titre = [
    {value: 0, name: 'depenses'},
    {value: 1, name: 'revenus'},
    ];
  @ViewChild('chartdiv2') chartdiv2;
  valueBarsChart: any;
  chartData1 = null ;
  transactionList: Transaction[];
  ViewDidLoad() {
    // Reference to our Firebase List
    this.ref = this.db.list('Transaction', ref => ref.orderByChild('titre'));
    // Catch any update to draw the Chart
    this.ref.valueChanges().subscribe(result => {
      if (this.chartData1) {
        this.updateCharts(result)
      } else {
        this.createCharts(result)
      }
    })
  }

  getReportValues() {
    let reportByTitre = {
      0: null,
      1: null,
    };
   
    for (let trans of this.chartData1) {
        if (trans.titre == 'depense') {
          reportByTitre[trans.titre] -= +trans.action.montantdepense;
          
        } else {
          reportByTitre[trans.titre] += +trans.action.montantrevenu;
        }
    }
    console.log(this.chartData1);
    return Object.keys(reportByTitre).map(a => reportByTitre[a]);
  }

  createCharts(data) {
    this.chartData1 = data;
   
    // Calculate Values for the Chart
    let chartData1 = this.getReportValues();
   
    // Create the chart
    var chart2 =this.AmCharts.makeChart( "chartdiv2", {
      type: 'pie',
      dataProvider: [ {
        "title":Object.keys(this.titre).map(a => this.titre[a]),
        "value": this.getReportValues
      }],
    });
  }


  updateCharts(data) {
    this.chartData1 = data;
    let chartData1 = this.getReportValues();
    // Update our dataset
    this.valueBarsChart.data.datasets.forEach((dataset) => {
      dataset.data = chartData1
    });
    this.valueBarsChart.update();
  }


  chartData = [{
   date: '2012-01-01',
    distance: 227,
   townName: 'New York',
   townName2: 'New York',
   townSize: 25,
    latitude: 40.71,
    duration: 408
 }, {
    date: '2012-01-02',
    distance: 371,
   townName: 'Washington',
   townSize: 14,
    latitude: 38.89,
    duration: 482
  }, {
    date: '2012-01-03',
    distance: 433,
   townName: 'Wilmington',
    townSize: 6,
   latitude: 34.22,
    duration: 562
  }, {
    date: '2012-01-04"',
    distance: 345,
    townName: 'Jacksonville',
    townSize: 7,
    latitude: 30.35,
    duration: 379
  },
    {
      date: '2012-01-05',
      distance: 480,
      townName: 'Miami',
      townName2: 'Miami',
      townSize: 10,
      latitude: 25.83,
      duration: 501
    }, {
      "date": "2012-01-06",
      "distance": 386,
      "townName": "Tallahassee",
      "townSize": 7,
      "latitude": 30.46,
      "duration": 443
    }, {
      "date": "2012-01-07",
      "distance": 348,
      "townName": "New Orleans",
      "townSize": 10,
      "latitude": 29.94,
      "duration": 405
    },
    {
      "date": "2012-01-08",
      "distance": 238,
      "townName": "Houston",
      "townName2": "Houston",
      "townSize": 16,
      "latitude": 29.76,
      "duration": 309
    }, {
      "date": "2012-01-09",
      "distance": 218,
      "townName": "Dalas",
      "townSize": 17,
      "latitude": 32.8,
      "duration": 287
    },
    {
      "date": "2012-01-10",
      "distance": 349,
      "townName": "Oklahoma City",
      "townSize": 11,
      "latitude": 35.49,
      "duration": 485
    }, {
      "date": "2012-01-11",
      "distance": 603,
      "townName": "Kansas City",
      "townSize": 10,
      "latitude": 39.1,
      "duration": 890
    },
    {
      "date": "2012-01-12",
      "distance": 534,
      "townName": "Denver",
      "townName2": "Denver",
      "townSize": 18,
      "latitude": 39.74,
      "duration": 810
    },
    {
      "date": "2012-01-13",
      "townName": "Salt Lake City",
      "townSize": 12,
      "distance": 425,
      "duration": 670,
      "latitude": 40.75,
      "alpha": 0.4
    }, {
      "date": "2012-01-14",
      "latitude": 36.1,
      "duration": 470,
      "townName": "Las Vegas",
      "townName2": "Las Vegas",
      "bulletClass": "lastBullet"
    }, {
      date: '2012-01-15'
    }, {
      date: '2012-01-16'
    }, {
      date: '2012-01-17'
    }, {
      date: '2012-01-18'
    }, {
      date: '2012-01-19'
    }];
 constructor(private transactionservice: TransactionService,private AmCharts: AmChartsService , private db: AngularFireDatabase) { }
  ngOnInit() {
    
    var chart1 = this.AmCharts.makeChart("chartdiv1", 
    {
      theme: "light",
      type: "serial",
      "radius": 100,
      dataProvider: [{
          "country": "1",
          "year2004": 3.5,
          "year2005": 4.2
      }, {
          "country": "4",
          "year2004": 1.7,
          "year2005": 3.1
      }, {
          "country": "8",
          "year2004": 2.8,
          "year2005": 2.9
      }, {
          "country": "12",
          "year2004": 2.6,
          "year2005": 2.3
      }, {
          "country": "16",
          "year2004": 1.4,
          "year2005": 2.1
      }, {
          "country": "20",
          "year2004": 2.6,
          "year2005": 4.9
      }, {
          "country": "24",
          "year2004": 6.4,
          "year2005": 7.2
      }, {
          "country": "28",
          "year2004": 8,
          "year2005": 7.1
      }, {
          "country": "30",
          "year2004": 9.9,
          "year2005": 10.1
      }],
      "valueAxes": [{
          "stackType": "3d",
          "unit": "D",
          "position": "left",
          "title": "Evolution ses revenus et des dépenses (montant/jour)",
      }],
      "startDuration": 10,
      "graphs": [{
          "balloonText": "Les dépenses sont évolu le [[category]] (dépenses): <b>[[value]]</b>",
          "fillAlphas": 0.9,
          "lineAlpha": 0.2,
          "title": "dépenses",
          "type": "column",
          "valueField": "year2004"
      }, {
          "balloonText": "les revenus sont évolu le [[category]] (revenus): <b>[[value]]</b>",
          "fillAlphas": 0.9,
          "lineAlpha": 0.2,
          "title": "Revenus",
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
    
  const chart = this.AmCharts.makeChart("chart",
  {
    type: 'serial',
    theme: 'none',
    "radius": 100,
    dataDateFormat: 'YYYY-MM-DD',
    dataProvider: this.chartData,
    addClassNames: true,
    startDuration: 1,
    //"color": "#FFFFFF",
    marginLeft: 0,
    categoryField: 'date',
    categoryAxis: {
      parseDates: true,
      minPeriod: 'DD',
      autoGridCount: false,
      gridCount: 50,
      gridAlpha: 0.1,
      gridColor: '#FFFFFF',
      axisColor: '#555555',
      dateFormats: [{
        period: 'DD',
        format: 'DD'
      },
        {
          period: 'WW',
          format: 'MMM DD'
        }, {
          period: 'MM',
          format: 'MMM'
        },
        {
          period: 'YYYY',
          format: 'YYYY'
        }]
    },

    valueAxes: [{
      id: 'a1',
      title: 'distance',
      gridAlpha: 0,
      axisAlpha: 0
    }, {
      id: 'a2',
      position: 'right',
      gridAlpha: 0,
      axisAlpha: 0,
      labelsEnabled: false
    },
      {
        id: 'a3',
        title: 'duration',
        position: 'right',
        gridAlpha: 0,
        axisAlpha: 0,
        inside: true,
        duration: 'mm',
        durationUnits: {
          DD: 'd. ',
          hh: 'h ',
          mm: 'min',
          ss: ''
        }
      }],
    graphs: [{
      id: 'g1',
      valueField: 'distance',
      title: 'distance',
      type: 'column',
      fillAlphas: 0.9,
      valueAxis: 'a1',
      balloonText: '[[value]] miles',
      legendValueText: '[[value]] mi',
      legendPeriodValueText: 'total: [[value.sum]] mi',
      lineColor: '#263138',
      alphaField: 'alpha'
    },
      {
        "id": "g2",
        "valueField": "latitude",
        "classNameField": "bulletClass",
        "title": "latitude/city",
        "type": "line",
        "valueAxis": "a2",
        "lineColor": "#786c56",
        "lineThickness": 1,
        "legendValueText": "[[value]]/[[description]]",
        "descriptionField": "townName",
        "bullet": "round",
        "bulletSizeField": "townSize",
        "bulletBorderColor": "#786c56",
        "bulletBorderAlpha": 1,
        "bulletBorderThickness": 2,
        "bulletColor": "#000000",
        "labelText": "[[townName2]]",
        "labelPosition": "right",
        "balloonText": "latitude:[[value]]",
        "showBalloon": true,
        "animationPlayed": true
      }, {
        "id": "g3",
        "title": "duration",
        "valueField": "duration",
        "type": "line",
        "valueAxis": "a3",
        "lineColor": "#ff5755",
        "balloonText": "[[value]]",
        "lineThickness": 1,
        "legendValueText": "[[value]]",
        "bullet": "square",
        "bulletBorderColor": "#ff5755",
        "bulletBorderThickness": 1,
        "bulletBorderAlpha": 1,
        "dashLengthField": "dashLength",
        "animationPlayed": true
      }],

    chartCursor: {
      zoomable: false,
      categoryBalloonDateFormat: 'DD',
      cursorAlpha: 0,
      valueBalloonsEnabled: false
    },
    legend: {
      bulletType: 'round',
      equalWidths: false,
      valueWidth: 120,
      useGraphSettings: true,
      //"color": "#FFFFFF"
    }
  });
let chartdep = this.AmCharts.makeChart("categoriedepensechartdiv",
  {
  "type": "pie",
  "fontSize": 8,
  "radius": 100,
  "theme": "light",
  "dataProvider": [{
    "categorie": 'Alimentation',
    "litres": 501.9
  }, {
    "categorie": 'Transports / Véhicule',
    "litres": 301.9
  }, {
    "categorie": 'Loisir',
    "litres": 201.1
  }, {
    "categorie": 'Logement',
    "litres": 165.8
  }, {
    "categorie": 'Santé',
    "litres": 139.9
  }, {
    "categorie": 'Habillement',
    "litres": 128.3
  }, {
    "categorie": 'Assurance',
    "litres": 99
  }, {
    "categorie": 'Téléphone/Internet',
    "litres": 60
  }, {
    "categorie": 'Enfants',
    "litres": 60
  }, {
    "categorie": 'autre',
    "litres": 50
  }],
  "valueField": "litres",
  "titleField": "categorie",
  "balloon": {
    "fixedPosition": true
  },
  "export": {
    "enabled": true
  }
});
let chartrev = this.AmCharts.makeChart("categorierevenuchartdiv", {
  "type": "pie",
  "fontSize": 8,
  "radius": 100,
  "theme": "light",
  "dataProvider": [{
    "categorie": 'Salaires Net',
    "litres": 501.9
  }, {
    "categorie": 'Bourses',
    "litres": 301.9
  }, {
    "categorie": 'Remboursements Sécurité Sociale',
    "litres": 201.1
  }, {
    "categorie": 'prêt bancaire',
    "litres": 165.8
  }, {
    "categorie": 'allocation familiale',
    "litres": 139.9
  }, {
    "categorie": 'Aides diverses',
    "litres": 128.3
  }, {
    "categorie": 'avance et acompte',
    "litres": 99
  }],
  "valueField": "litres",
  "titleField": "categorie",
  "balloon": {
    "fixedPosition": true
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
    "fixedPosition": true}}
    );
}
  }

 
