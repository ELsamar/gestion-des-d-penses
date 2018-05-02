import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjetComponent} from './projet/projet.component';
import {ProjetsComponent} from './projets.component';
import { ListprojetsComponent } from './listprojets/listprojets.component';

const routes: Routes = [
  {
    path: 'listpro' ,
    component: ListprojetsComponent
  },
  {
    path: 'formulaire' ,
    component: ProjetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetsRoutingModule { }
