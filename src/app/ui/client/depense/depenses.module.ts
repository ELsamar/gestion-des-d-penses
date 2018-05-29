import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AuthService} from '../../../providers/auth.service';
import { DepensesService } from '../../../shared/services/depenses.service';
import { DepensesRoutingModule } from './depenses-routing.module';

import { DepensesComponent} from './depenses.component';
import { ListdepensesComponent } from './listdepenses/listdepenses.component';
import { DepenseComponent } from './depense/depense.component';
import { ModeldepenseComponent } from './modeldepense/modeldepense.component';
import { ListmodeldepenseComponent } from './listmodeldepense/listmodeldepense.component';
import { ListDepensesRecurrentComponent } from './list-depenses-recurrent/list-depenses-recurrent.component';
import { DashdepComponent } from './dashdep/dashdep.component';
import {AlertService} from '../../../shared/services/alert.service';
import {ModeleDepenseService} from '../../../shared/services/modele-depense.service';
@NgModule({
  imports: [
    CommonModule,
    DepensesRoutingModule,
    FormsModule,
  ],
  declarations: [
    DepenseComponent,
    ListdepensesComponent,
    ModeldepenseComponent,
    ListmodeldepenseComponent,
    ListDepensesRecurrentComponent,
DashdepComponent
  ],
  providers: [
    DepensesService,
    AuthService,
    AlertService,
    ModeleDepenseService

  ],
})
export class DepensesModule { }
