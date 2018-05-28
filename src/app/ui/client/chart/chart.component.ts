import { Component, OnInit ,OnDestroy,ViewChild} from '@angular/core';
import { AmChartsService } from "amcharts3-angular2";
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
  @ViewChild('chartdiv2') chartdiv2;
  valueBarsChart: any;
  chartData1 = null ;
  transactionList: Transaction[];
 getdata(){
  this.ref = this.db.list('Transaction', ref => ref.orderByChild('titre'));
 }
 constructor(private transactionservice: TransactionService,private AmCharts: AmChartsService , private db: AngularFireDatabase) { }
  ngOnInit() {
    
      
  }
  }

 
