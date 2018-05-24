import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';
import {DepensesModule} from './depense/depenses.module';
import {RevenusModule} from './revenu/revenus.module';
import {ProjetsModule} from './projets/projets.module';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import {ListTransactionComponent} from './list-transaction/list-transaction.component';
import {DepensesComponent} from './depense/depenses.component';
import {RevenusComponent} from './revenu/revenus.component';
import {DashrevComponent} from './revenu/dashrev/dashrev.component';
import {DashdepComponent} from './depense/dashdep/dashdep.component';



@NgModule({
  imports: [
    CommonModule,
    DepensesModule,
    RevenusModule,
    ProjetsModule,
    FormsModule,
    ClientRoutingModule,
  ],
  declarations: [
    ClientComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    ProfilComponent,
    ListTransactionComponent,
    DepensesComponent,
    DashdepComponent,
    DashrevComponent
  ]
})
export class ClientModule { }
