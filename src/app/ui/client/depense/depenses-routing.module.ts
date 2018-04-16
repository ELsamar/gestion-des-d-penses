import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {DepensesComponent} from './depenses.component';
import {DepenseComponent} from './depense/depense.component';


const routes: Routes = [
  {
    path: '' ,
    component: DepensesComponent
  },
  {
    path: 'formulaire' ,
    component: DepenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepensesRoutingModule { }
