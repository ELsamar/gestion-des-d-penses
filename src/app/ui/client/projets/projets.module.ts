import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import { ProjetsComponent } from './projets.component';
import { ListprojetsComponent } from './listprojets/listprojets.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjetsService} from '../../../shared/services/projets.service';
import {FormsModule, NgForm} from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
@NgModule({
  imports: [
    CommonModule,
    ProjetsRoutingModule,
    FormsModule,
  ],
  declarations: [ProjetsComponent, ListprojetsComponent, ProjetComponent],
  providers: [
    ProjetsService,
    DateValueAccessorModule,
  ],
})
export class ProjetsModule { }
