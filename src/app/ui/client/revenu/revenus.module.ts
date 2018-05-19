import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenusService} from '../../../shared/services/revenus.service';
import { RevenuRoutingModule } from './revenus-routing.module';
import { RevenusComponent} from './revenus.component';
import {RevenuComponent} from './revenu/revenu.component';
import { RevenulistComponent } from './revenulist/revenulist.component';
import {FormsModule, NgForm} from '@angular/forms';
import { DashrevComponent } from './dashrev/dashrev.component';
import { ListrevenusrecurrantsComponent } from './listrevenusrecurrants/listrevenusrecurrants.component';
import { ListmodelsrevComponent } from './listmodelsrev/listmodelsrev.component';
import { ModelsrevComponent } from './modelsrev/modelsrev.component';
import {AlertService} from '../../../shared/services/alert.service';
import {ModelsrevService} from '../../../shared/services/modelsrev.service';
import {AuthService} from '../../../providers/auth.service';
@NgModule({
  imports: [
    CommonModule,
    RevenuRoutingModule,
    FormsModule,
  ],
  declarations: [RevenusComponent, RevenuComponent, RevenulistComponent, DashrevComponent, ListrevenusrecurrantsComponent, ListmodelsrevComponent, ModelsrevComponent],
  providers: [
    RevenusService,
    AuthService,
    AlertService,
    ModelsrevService
  ],
})
export class RevenusModule { }
