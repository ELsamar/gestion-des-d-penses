import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListprojetsComponent} from '../projets/listprojets/listprojets.component';
import {ChartComponent} from './chart.component';

@NgModule({
  imports: [
    CommonModule,
    ListprojetsComponent
  ],
  declarations: [ChartComponent],
  providers: [ListprojetsComponent]
})
export class ChartModule { }
