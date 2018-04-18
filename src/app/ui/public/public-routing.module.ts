import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EngagementsComponent } from './engagements/engagements.component';
import { FonctionalitesComponent } from './fonctionalites/fonctionalites.component';
import { ContactsComponent } from './contacts/contacts.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes) ,  NgbModule.forRoot()],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
