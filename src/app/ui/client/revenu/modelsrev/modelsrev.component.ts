import { Component, OnInit } from '@angular/core';
import {Modelerev} from '../../../../shared/models/modelerev';
import {ModelsrevService} from '../../../../shared/services/modelsrev.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-modelsrev',
  templateUrl: './modelsrev.component.html',
  styleUrls: ['./modelsrev.component.css']
})
export class ModelsrevComponent implements OnInit {
  currentModelerev: any ;
  constructor(private modelrevservice: ModelsrevService, private toastr: ToastrService) { }


  ngOnInit() {
  }
  saveModelerev(ModelerevForm: NgForm) {
    this.modelrevservice.insertModeleRev(ModelerevForm.value);
    this.toastr.success('Submitted Succcessfully', 'modele ajoutè');
    this.resetForm(ModelerevForm);
  }
  onUpdateModelerev(ModelerevForm: NgForm) {
    this.modelrevservice.updateModeleRev(ModelerevForm.value);
  }
  onSubmit(ModelerevForm: NgForm) {
    if (ModelerevForm.value.$key == null) {
      this.modelrevservice.insertModeleRev(ModelerevForm.value);
    } else { this.modelrevservice.updateModeleRev(ModelerevForm.value); }
    this.resetForm(ModelerevForm);
  }

  resetForm(ModelerevForm?: NgForm) {
    if (ModelerevForm != null) {
      ModelerevForm.reset(); }
    }
}
