import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DepensesModule} from './depense/depenses.module';
import {ProjetsModule} from './projets/projets.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfilComponent} from './profil/profil.component';
import {DepensesComponent} from './depense/depenses.component';
import {ProjetsComponent} from './projets/projets.component';
import {RevenusComponent} from './revenu/revenus.component';
import {NotFound404Component} from '../../shared/not-found404/not-found404.component';
import {ListTransactionComponent} from './list-transaction/list-transaction.component';
import {ChartComponent} from './chart/chart.component';


const routes: Routes = <Routes> [
  {
    path: 'dash',
    component: DashboardComponent
  },
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'transaction',
    component: ListTransactionComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'depenses',
    component: DepensesComponent,
    loadChildren: './depense/depenses.module#DepensesModule'
  },
  {
    path: 'revenus',
    component: RevenusComponent,
    loadChildren: './revenu/revenus.module#RevenusModule'
  },
  {
    path: 'projets',
    component: ProjetsComponent,
    loadChildren: './projets/projets.module#ProjetsModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
