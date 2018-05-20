import { Component, OnInit } from '@angular/core';
import {ModeleDepense} from '../../../../shared/models/modele-depense';
import {ModeleDepenseService} from '../../../../shared/services/modele-depense.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-modeldepense',
  templateUrl: './modeldepense.component.html',
  styleUrls: ['./modeldepense.component.css']
})
export class ModeldepenseComponent implements OnInit {
  categories: any = ['Alimentation', 'Transports / Véhicule', 'Loisir', ' Logement',
    'Santé', 'Habillement', 'Assurance', 'Téléphone/Internet', 'Enfants'];
  currentModeleDepense: any ;
  constructor(private modeledepenseservice: ModeleDepenseService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  saveModeleDepense(ModeleDepenseForm: NgForm) {
    this.modeledepenseservice.insertModeleDepense(ModeleDepenseForm.value);
    this.toastr.success('Submitted Succcessfully', 'modele ajoutè');
    this.resetForm(ModeleDepenseForm);
  }
  onUpdateModeleDepense(ModeleDepenseForm: NgForm) {
    this.modeledepenseservice.updateModeleDepense(ModeleDepenseForm.value);
  }
  onSubmit(ModeleDepenseForm: NgForm) {
    console.log(ModeleDepenseForm.value.key);
    if (!(ModeleDepenseForm.value.key)) {
      this.modeledepenseservice.insertModeleDepense(ModeleDepenseForm.value);
    } else {
      this.modeledepenseservice.updateModeleDepense(ModeleDepenseForm.value); }
    this.resetForm(ModeleDepenseForm);
  }

  resetForm(ModeleDepenseForm?: NgForm) {
    if (ModeleDepenseForm != null) {
      ModeleDepenseForm.reset(); }
    }

}

