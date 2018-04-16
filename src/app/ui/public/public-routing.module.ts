import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EngagementsComponent } from './engagements/engagements.component';
import { FonctionalitesComponent } from './fonctionalites/fonctionalites.component';
import { ContactsComponent } from './contacts/contacts.component';
const routes: Routes = [
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
