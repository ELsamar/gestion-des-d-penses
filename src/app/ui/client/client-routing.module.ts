import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DepensesModule} from './depense/depenses.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfilComponent} from './profil/profil.component';
import {TransactionsModule} from './transactions/transactions.module';

const routes: Routes = [
  {
    path: 'dashboard' ,
    component: DashboardComponent
  },
  {
    path: 'transaction' ,
    loadChildren : './transactions/transactions.module#TransactionsModule'
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
