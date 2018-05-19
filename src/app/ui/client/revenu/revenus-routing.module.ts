import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import {RevenuComponent} from './revenu/revenu.component';
import {RevenusComponent} from './revenus.component';
import { RevenulistComponent } from './revenulist/revenulist.component';

import { DashrevComponent } from './dashrev/dashrev.component';
import { ListrevenusrecurrantsComponent } from './listrevenusrecurrants/listrevenusrecurrants.component';
import { ListmodelsrevComponent } from './listmodelsrev/listmodelsrev.component';
import { ModelsrevComponent } from './modelsrev/modelsrev.component';

const routes: Routes = [
  {
    path: '' ,
    component: DashrevComponent 
  },
  {
    path: 'listrev' ,
    component: RevenulistComponent
  },
  {
    path: 'listrevR' ,
    component: ListrevenusrecurrantsComponent
  },
  {
    path: 'formulaire' ,
    component: RevenuComponent
  },
  {
    path: 'model' ,
    component: ModelsrevComponent
  },
  {
    path: 'listmodel' ,
    component: ListmodelsrevComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenuRoutingModule { }
