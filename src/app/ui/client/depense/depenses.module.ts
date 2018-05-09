import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepensesService } from '../../../shared/services/depenses.service';
import { DepensesRoutingModule } from './depenses-routing.module';
import { DepensesComponent} from './depenses.component';
import { ListdepensesComponent } from './listdepenses/listdepenses.component';
import { DepenseComponent } from './depense/depense.component';
import { ModeldepenseComponent } from './modeldepense/modeldepense.component';
import { ListmodeldepenseComponent } from './listmodeldepense/listmodeldepense.component';
import { ListDepensesRecurrentComponent } from './list-depenses-recurrent/list-depenses-recurrent.component';

@NgModule({
  imports: [
    CommonModule,
    DepensesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DepenseComponent,
    ListdepensesComponent,
    DepensesComponent,
    ModeldepenseComponent,
    ListmodeldepenseComponent,
    ListDepensesRecurrentComponent
  ],
  providers: [
    DepensesService,

  ],
})
export class DepensesModule { }
