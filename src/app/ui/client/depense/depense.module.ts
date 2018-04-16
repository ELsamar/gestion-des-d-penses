import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepenseRoutingModule } from './depense-routing.module';
import { DepenseComponent } from './depense.component';
import { ListdepensesComponent } from './listdepenses/listdepenses.component';
import { FormulairedepenseComponent } from './formulairedepense/formulairedepense.component';

@NgModule({
  imports: [
    CommonModule,
    DepenseRoutingModule
  ],
  declarations: [
    DepenseComponent,
    ListdepensesComponent,
    FormulairedepenseComponent]
})
export class DepenseModule { }
