import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {DepenseComponent} from './depense.component';
import {FormulairedepenseComponent} from './formulairedepense/formulairedepense.component';

const routes: Routes = [
  {
    path: '' ,
    component: DepenseComponent
  },
  {
    path: 'formulaire' ,
    component: FormulairedepenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepenseRoutingModule { }
