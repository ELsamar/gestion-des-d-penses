import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepensesRoutingModule } from './depenses-routing.module';
import { DepensesComponent} from './depenses.component';
import { ListdepensesComponent } from './listdepenses/listdepenses.component';
import { DepenseComponent } from './depense/depense.component';

@NgModule({
  imports: [
    CommonModule,
    DepensesRoutingModule
  ],
  declarations: [
    DepenseComponent,
    ListdepensesComponent,
    DepensesComponent
  ]
})
export class DepensesModule { }
