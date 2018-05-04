import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DepensesModule} from './depense/depenses.module';
import {ProjetsModule} from './projets/projets.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfilComponent} from './profil/profil.component';
import {TransactionsModule} from './transactions/transactions.module';
import {DepensesComponent} from './depense/depenses.component';
import {ProjetsComponent} from './projets/projets.component';
import {RevenusComponent} from './revenu/revenus.component';

const routes: Routes = <Routes> [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dash',
    component: DashboardComponent
  },
  {
    path: 'transaction',
    loadChildren: './transactions/transactions.module#TransactionsModule'
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
