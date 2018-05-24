import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenusService} from '../../../shared/services/revenus.service';
import { RevenuRoutingModule } from './revenus-routing.module';
import { RevenusComponent} from './revenus.component';
import {RevenuComponent} from './revenu/revenu.component';
import {FormsModule} from '@angular/forms';
import { DashrevComponent } from './dashrev/dashrev.component';
import { ListrevenusrecurrantsComponent } from './listrevenusrecurrants/listrevenusrecurrants.component';
import {AlertService} from '../../../shared/services/alert.service';
import {ModeleRevenusService} from '../../../shared/services/modele-revenus.service';
import {AuthService} from '../../../providers/auth.service';
import {ModelerevenuComponent} from './modelerevenu/modelerevenu.component';
import {ListmodelrevenuComponent} from './listmodelrevenu/listmodelrevenu.component';
import {ListrevenuComponent} from './listrevenu/listrevenu.component';
@NgModule({
  imports: [
    CommonModule,
    RevenuRoutingModule,
    FormsModule,
  ],
  declarations: [
    RevenusComponent,
    RevenuComponent,
    ListrevenuComponent,
    DashrevComponent,
    ListrevenusrecurrantsComponent,
    ModelerevenuComponent,
    ListmodelrevenuComponent],
  providers: [
    RevenusService,
    AuthService,
    AlertService,
    ModeleRevenusService
  ],
})
export class RevenusModule { }
