import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import {RevenuComponent} from './revenu/revenu.component';
import { DashrevComponent } from './dashrev/dashrev.component';
import { ListrevenusrecurrantsComponent } from './listrevenusrecurrants/listrevenusrecurrants.component';
import {ModelerevenuComponent} from './modelerevenu/modelerevenu.component';
import {ListmodelrevenuComponent} from './listmodelrevenu/listmodelrevenu.component';
import {ListrevenuComponent} from './listrevenu/listrevenu.component';

const routes: Routes = [
  {
    path: '' ,
    component: DashrevComponent
  },
  {
    path: 'listrev' ,
    component: ListrevenuComponent
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
    component: ModelerevenuComponent
  },
  {
    path: 'listmodel' ,
    component: ListmodelrevenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenuRoutingModule { }
