import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import {FormsModule, NgForm} from '@angular/forms';

>>>>>>> master
import {DepensesModule} from './depense/depenses.module';
import {RevenusModule} from './revenu/revenus.module';
import {ProjetsModule} from './projets/projets.module';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import {TransactionsModule} from './transactions/transactions.module';


@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    DepensesModule,
<<<<<<< HEAD
    RevenusModule,
    ProjetsModule,
    TransactionsModule
=======
    TransactionsModule,
    FormsModule,
>>>>>>> master
  ],
  declarations: [
    ClientComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    ProfilComponent,
    ]
})
export class ClientModule { }
