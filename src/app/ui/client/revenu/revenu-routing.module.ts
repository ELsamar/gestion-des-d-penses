import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {RevenuComponent} from './revenu.component';
import {FormulairerevenuComponent} from './formulairerevenu/formulairerevenu.component';


const routes: Routes = [
  {
    path: '' ,
    component: RevenuComponent
  },
  {
    path: 'formulaire' ,
    component: FormulairerevenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenuRoutingModule { }
