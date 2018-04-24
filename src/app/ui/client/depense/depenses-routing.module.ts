import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {DepensesComponent} from './depenses.component';
import {DepenseComponent} from './depense/depense.component';
import { ListdepensesComponent } from './listdepenses/listdepenses.component';


const routes: Routes = [
  {
    path: 'listdep' ,
    component: ListdepensesComponent
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
