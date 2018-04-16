import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DepensesModule} from './depense/depenses.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {TransactionComponent} from './transaction/transaction.component';
import {ProfilComponent} from './profil/profil.component';

const routes: Routes = [
  {
    path: '' ,
    component: DashboardComponent
  },
  {
    path: 'transaction' ,
    component: TransactionComponent
  },
  {
    path: 'profil' ,
    component: ProfilComponent
  },
  {
    path: 'depenses',
    loadChildren: './depense/depenses.module#DepensesModule'
  },
  {
    path: 'revenus',
    loadChildren: './revenu/revenus.module#RevenusModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
