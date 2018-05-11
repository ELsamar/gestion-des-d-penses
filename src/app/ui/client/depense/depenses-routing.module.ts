import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {DepensesComponent} from './depenses.component';
import {DepenseComponent} from './depense/depense.component';
import { ListdepensesComponent } from './listdepenses/listdepenses.component';
import {ModeldepenseComponent} from './modeldepense/modeldepense.component';
import {ListDepensesRecurrentComponent} from './list-depenses-recurrent/list-depenses-recurrent.component';
import {DashdepComponent} from './dashdep/dashdep.component';


const routes: Routes = [
  {
    path: '' ,
    component: DashdepComponent
  },
  {
    path: 'listdep' ,
    component: ListdepensesComponent
  },
  {
    path: 'listdepR' ,
    component: ListDepensesRecurrentComponent
  },
  {
    path: 'formulaire' ,
    component: DepenseComponent
  },
  {
    path: 'Model' ,
    component: ModeldepenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepensesRoutingModule { }
