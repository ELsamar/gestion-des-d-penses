import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DepenseModule} from './depense/depense.module';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ProfilComponent } from './profil/profil.component';



@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    DepenseModule
  ],
  declarations: [
    ClientComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    TransactionComponent,
    ProfilComponent,
    ]
})
export class ClientModule { }
