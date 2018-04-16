import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenuRoutingModule } from './revenus-routing.module';
import { RevenusComponent} from './revenus.component';
import {RevenuComponent} from './revenu/revenu.component';


@NgModule({
  imports: [
    CommonModule,
    RevenuRoutingModule
  ],
  declarations: [RevenusComponent, RevenuComponent]
})
export class RevenusModule { }
