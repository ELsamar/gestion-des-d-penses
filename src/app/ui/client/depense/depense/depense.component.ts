import {Component, OnInit} from '@angular/core';
import {DepensesService} from '../../../../shared/services/depenses.service';
import {Depenses, FileUpload} from '../../../../shared/models/depenses';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../../../providers/auth.service';
import {AlertService} from '../../../../shared/services/alert.service';
import {ModeleDepense} from '../../../../shared/models/modele-depense';
import {ModeleDepenseService} from '../../../../shared/services/modele-depense.service';

@Component({
  selector: 'app-formulairedepense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css'],
})
export class DepenseComponent implements OnInit {
  selectedModel: ModeleDepense;
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = {percentage: 0};
  Modelelist: ModeleDepense [];
  cathegories: any = ['Transport/Vehicule', 'Loisir', ' Eléctricité'];
  repetes: any = ['Jamais', 'Semaine', 'mois'];
  semaines: any = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  Mois: any = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  alerts: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  constructor(private alertservice: AlertService, private depenseservice: DepensesService, public authservice: AuthService,
              private modeledepenseservice: ModeleDepenseService) {
  }

  currentdepenses: any;
  ModelelistDefault  =
    {
      cathegorieModele: 'TEstttttt',
      dateModele: '2018-05-11',
      descriptionModele: 'test 2',
      idauth: 'uvnasK7OPvMHgTRueGo0Vqi39l63',
      montantModele: '220',
      titreModele: 'modelnada',
      $key: '-LCF8LOqcROMRIsrxmGc'
    };

  ngOnInit() {
    this.currentdepenses = new Depenses();
    let x = this.modeledepenseservice.getdataauth();
    x.snapshotChanges().subscribe(item => {
      this.Modelelist = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.Modelelist.push(y as ModeleDepense);
      });
    });
  }

  selectModelAction(model: any) {
    console.log('test');
    this.modeledepenseservice.selectedModele = Object.assign({}, model);
    console.log( this.modeledepenseservice.selectedModele);
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
