import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {AmChartsService, AmChart, AmChartsDirective} from '@amcharts/amcharts3-angular';
import {TransactionService} from '../../../shared/services/transaction.service';
import {Transaction} from '../../../shared/models/transaction';
import {DepensesService} from '../../../shared/services/depenses.service';
import {RevenusService} from '../../../shared/services/revenus.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AngularFireList} from 'angularfire2/database/interfaces';
import {ProjetsService} from '../../../shared/services/projets.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private chart: any;
  data: Observable<any[]>;
  ref: AngularFireList<any>;
  revenuslist: any [];
depenselist: any [];
projetlist: any[];
list: any[];
  constructor(private transactionservice: TransactionService, private AmCharts: AmChartsService,
              private db: AngularFireDatabase, private revenuSR: RevenusService, private depenseSR: DepensesService,
              private projetSR: ProjetsService) {
  }

  ngOnInit() {
    this.revenuSR.getRevenu('Revenus/RevenusRecurrent').snapshotChanges().subscribe(item => {
      this.revenuslist = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        let obj = {
          'categorie': y['categorierevenu'],
          'litres': y['montantrevenu']
        };
        this.revenuslist.push(obj);
      });
      let chartrev = this.AmCharts.makeChart('categorierevenuchartdiv', {
        'type': 'pie',
        'fontSize': 8,
        'radius': 100,
        'theme': 'light',
        'dataProvider': this.revenuslist,
        'valueField': 'litres',
        'titleField': 'categorie',
        'balloon': {
          'fixedPosition': true
        },
        'export': {
          'enabled': true
        }
      });

    });
    this.depenseSR.getDepense('Depenses/DepensesRecurrent').snapshotChanges().subscribe(item => {
      this.depenselist = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        let objdep = {
          'categorie': y['categoriedepense'],
          'litres': y['montantdepense']
        };
        this.depenselist.push(objdep);
      });
    let chartdep = this.AmCharts.makeChart('categoriedepensechartdiv',
      {
        'type': 'pie',
        'fontSize': 8,
        'radius': 100,
        'theme': 'light',
        'dataProvider': this.depenselist,
        'valueField': 'litres',
        'titleField': 'categorie',
        'balloon': {
          'fixedPosition': true
        },
        'export': {
          'enabled': true
        }
      });
    });
    this.revenuSR.getRevenu('Revenus/Revenus').snapshotChanges().subscribe(item => {
      this.revenuslist = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        let obj = {
          'date': y['daterevenu'],
          'montantrev': y['montantrevenu'],
          
        };
        this.revenuslist.push(obj);
      });
    let chart1 = this.AmCharts.makeChart('chartrev',
      {
        theme: 'light',
        type: 'serial',
        'radius': 100,
        'dataProvider':this.revenuslist,
        'valueAxes': [{
          'stackType': '3d',
          'unit': 'Dt',
          'position': 'left',
          'title': 'Montant',
        }],
        'startDuration': 10,
        'graphs': [{
          'balloonText': 'Les revenus sont évolu le [[category]]: <b>[[value]]DNT</b>',
          'fillAlphas': 0.9,
          'lineAlpha': 0.2,
          'title': 'Depenses',
          'type': 'column',
          'valueField': 'montantrev'
        }, {
          'balloonText': 'les Dépenses sont évolu le [[category]]: <b>[[value]]DNT</b>',
          'fillAlphas': 0.9,
          'lineAlpha': 0.2,
          'title': 'Revenus',
          'type': 'column',
          'valueField': 'montantdep'
        }],
        'plotAreaFillAlphas': 0.1,
        'depth3D': 60,
        'angle': 30,
        'categoryField': 'date',
        'categoryAxis': {
          'gridPosition': 'start'
        },
        'export': {
          'enabled': true
        }
      });
    })
  this.depenseSR.getDepense('Depenses/Depenses').snapshotChanges().subscribe(item => {
    this.depenselist = [];      
    item.forEach(element => {
      let z = element.payload.toJSON();
      let objdep = {
        'date': z['datedepense'],
        'montantdep': z['montantdepense']
      };
      this.depenselist.push(objdep);
    });
let chart2 = this.AmCharts.makeChart('chartdep',
  {
    theme: 'light',
    type: 'serial',
    'radius': 100,
    'dataProvider':this.depenselist,
    'valueAxes': [{
      'stackType': '3d',
      'unit': 'Dt',
      'position': 'left',
      'title': 'Montant',
    }],
    'startDuration': 10,
    'graphs': [{
      'balloonText': 'Les revenus sont évolu le [[category]]: <b>[[value]] DNT</b>',
      'fillAlphas': 0.9,
      'lineAlpha': 0.2,
      'title': 'Depenses',
      'type': 'column',
      'valueField': 'montantrev'
    }, {
      'balloonText': 'les dépenses sont évolu le [[category]]: <b>[[value]]DNT</b>',
      'fillAlphas': 0.9,
      'lineAlpha': 0.2,
      'title': 'Revenus',
      'type': 'column',
      'valueField': 'montantdep'
    }],
    'plotAreaFillAlphas': 0.1,
    'depth3D': 60,
    'angle': 30,
    'categoryField': 'date',
    'categoryAxis': {
      'gridPosition': 'start'
    },
    'export': {
      'enabled': true
    }
  });
})
let chart3 = this.AmCharts.makeChart('chartdeprev',
  {
    theme: 'light',
    type: 'serial',
    'radius': 100,
    'dataProvider':[{
      'date':'20-05-2018',
      'montantrev':'100',
      'montantdep':'5'
    },
    {
      'date':'21-05-2018',
      'montantrev':'1000',
      'montantdep':'0'
    },
    {
      'date':'22-05-2018',
      'montantrev':'50',
      'montantdep':'50'
    },
    {
      'date':'12-06-2018',
      'montantrev':'350',
      'montantdep':'100'
    },
    {
      'date':'19-06-2018',
      'montantrev':'35',
      'montantdep':'0'
    }

  ],
    'valueAxes': [{
      'stackType': '3d',
      'unit': 'Dt',
      'position': 'left',
      'title': 'Montant',
    }],
    'startDuration': 10,
    'graphs': [{
      'balloonText': 'Les revenus sont évolu le [[category]]: <b>[[value]] DNT</b>',
      'fillAlphas': 0.9,
      'lineAlpha': 0.2,
      'title': 'Depenses',
      'type': 'column',
      'valueField': 'montantrev'
    }, {
      'balloonText': 'les dépenses sont évolu le [[category]]: <b>[[value]]DNT</b>',
      'fillAlphas': 0.9,
      'lineAlpha': 0.2,
      'title': 'Revenus',
      'type': 'column',
      'valueField': 'montantdep'
    }],
    'plotAreaFillAlphas': 0.1,
    'depth3D': 60,
    'angle': 30,
    'categoryField': 'date',
    'categoryAxis': {
      'gridPosition': 'start'
    },
    'export': {
      'enabled': true
    }
  });
    let chartprojet = this.AmCharts.makeChart('projetchart', {
        'type': 'pie',
        'radius': 100,
        'fontSize': 8,
        'theme': 'light',
        'dataProvider': [{
          'categorie': 'Projet faite',
          'litres': 5
        }, {
          'categorie': 'projet non faite',
          'litres': 10
        }],
        'valueField': 'litres',
        'titleField': 'categorie',
        'balloon': {
          'fixedPosition': true
        }
      }
    );
  }
}
