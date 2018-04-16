import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenuRoutingModule } from './revenu-routing.module';
import { RevenuComponent } from './revenu.component';
import { FormulairerevenuComponent } from './formulairerevenu/formulairerevenu.component';

@NgModule({
  imports: [
    CommonModule,
    RevenuRoutingModule
  ],
  declarations: [RevenuComponent, FormulairerevenuComponent]
})
export class RevenuModule { }
