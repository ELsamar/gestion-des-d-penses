import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EngagementsComponent } from './engagements/engagements.component';
import { FonctionalitesComponent } from './fonctionalites/fonctionalites.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PublicComponent } from './public.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
  declarations: [AcceuilComponent, EngagementsComponent,
    FonctionalitesComponent, ContactsComponent, PublicComponent]
})
export class PublicModule { }
