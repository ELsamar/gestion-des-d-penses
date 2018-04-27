import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import {RevenuComponent} from './revenu/revenu.component';
import {RevenusComponent} from './revenus.component';
import { RevenulistComponent } from './revenulist/revenulist.component';


const routes: Routes = [
  {
    path: 'liste' ,
    component: RevenulistComponent
  },
  {
    path: 'formulaire' ,
    component: RevenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenuRoutingModule { }
