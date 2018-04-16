import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DepenseModule} from './depense/depense.module';

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
    path: 'depense',
    loadChildren: './depense/depense.module#DepenseModule'
  },
  {
    path: 'revenu',
    loadChildren: './revenu/revenu.module#RevenuModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
