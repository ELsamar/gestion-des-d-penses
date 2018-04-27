import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenusService} from '../../../shared/services/revenus.service';
import { RevenuRoutingModule } from './revenus-routing.module';
import { RevenusComponent} from './revenus.component';
import {RevenuComponent} from './revenu/revenu.component';
import { RevenulistComponent } from './revenulist/revenulist.component';
import {FormsModule, NgForm} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RevenuRoutingModule,
    FormsModule,
  ],
  declarations: [RevenusComponent, RevenuComponent, RevenulistComponent],
  providers: [
    RevenusService,
  
  ],
})
export class RevenusModule { }
