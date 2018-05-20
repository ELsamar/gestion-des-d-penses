import { Component, OnInit } from '@angular/core';
import {ModeleRevenus} from '../../../../shared/models/modele-revenus';
import {ModeleRevenusService} from '../../../../shared/services/modele-revenus.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-modelsrev',
  templateUrl: './modelerevenu.component.html',
  styleUrls: ['./modelerevenucomponent.css']
})
export class ModelerevenuComponent implements OnInit {
  categories: any = ['Salaires Net', 'Bourses', 'Remboursements Sécurité Sociale', 'prêt bancaire',
    'allocation familiale', 'Aides diverses', 'avance et acompte'];
  currentModelerev: any ;
  constructor(private modelerevenusservice: ModeleRevenusService, private toastr: ToastrService) { }


  ngOnInit() {
  }
  saveModelerev(ModelerevForm: NgForm) {
    this.modelerevenusservice.insertModeleRevenu(ModelerevForm.value);
    this.toastr.success('Submitted Succcessfully', 'modele ajoutè');
    this.resetForm(ModelerevForm);
  }
  onUpdateModelerev(ModelerevForm: NgForm) {
    this.modelerevenusservice.updateModeleRevenu(ModelerevForm.value);
  }
  onSubmit(ModelerevForm: NgForm) {
    if (ModelerevForm.value.$key == null) {
      this.modelerevenusservice.insertModeleRevenu(ModelerevForm.value);
    } else { this.modelerevenusservice.updateModeleRevenu(ModelerevForm.value); }
    this.resetForm(ModelerevForm);
  }

  resetForm(ModelerevForm?: NgForm) {
    if (ModelerevForm != null) {
      ModelerevForm.reset(); }
    }
}
