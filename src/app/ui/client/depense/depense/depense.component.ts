import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { DepensesService } from '../../../../shared/services/depenses.service';
import { Depenses, FileUpload } from '../../../../shared/models/depenses';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../../../providers/auth.service';
@Component({
  selector: 'app-formulairedepense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css'] ,
  providers: [
  DepensesService,
  ],
})
export class DepenseComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };

  typdeps: any = ['Daprés module', '...', '...'];
  cathegories: any = ['Transport/Vehicule', 'Loisir', ' Eléctricité'];
  repetes: any = ['Jamais' , 'Semaine' , 'mois'];
  semaines: any = ['', 'Lundi' , 'Mardi' , 'Mercredi' , 'Jeudi' , 'Vendredi' , 'Samedi' , 'Dimanche'];
  Mois: any = ['', '1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  alerts: any = ['1' , '2' , '3' , '4' , '5', '6', '7' , '8' , '9', '10' , '11' , '12'];
  constructor(private depenseservice: DepensesService, public authservice: AuthService, private fb: FormBuilder) {}
  currentdepenses: any;
  ngOnInit() {
      this.currentdepenses = new Depenses();
    }

  savedepense() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.depenseservice.insertDepense('Depenses/Depenses', this.currentdepenses, this.currentFileUpload, this.progress);
  }
  savedepenseRecurrent() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.depenseservice.insertDepenseRecurrent('Depenses/DepensesRecurrent', this.currentdepenses, this.currentFileUpload, this.progress);
  }
  // onSubmit(depensesForm: NgForm) {
  //   const file = this.selectedFiles.item(0);
  //   this.selectedFiles = undefined;
  //
  //   this.currentFileUpload = new FileUpload(file);
  //   this.depenseservice.insertDepense(depensesForm.value, this.currentFileUpload, this.progress);
  // }
  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }



}
