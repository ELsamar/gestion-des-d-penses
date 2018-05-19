import {Component, OnInit} from '@angular/core';
import {DepensesService} from '../../../../shared/services/depenses.service';
import {Depenses, FileUpload} from '../../../../shared/models/depenses';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../../../providers/auth.service';
import {AlertService} from '../../../../shared/services/alert.service';
import {ModeleDepense} from '../../../../shared/models/modele-depense';
import {ModeleDepenseService} from '../../../../shared/services/modele-depense.service';
import {Alert} from '../../../../shared/models/alert';
import {TransactionService} from '../../../../shared/services/transaction.service';
import {Transaction} from '../../../../shared/models/transaction';

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
  currentalert: Alert = new Alert();
  cathegories: any = ['Transport/Vehicule', 'Loisir', ' Eléctricité'];
  repetes: any = ['Jamais', 'Semaine', 'mois'];
  semaines: any = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  Mois: any = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  alerts: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  ajoute = false;
  newdepenseKey: string;
  constructor(private alertservice: AlertService, private depenseservice: DepensesService, public authservice: AuthService,
              private modeledepenseservice: ModeleDepenseService, private transactionservice: TransactionService) {
  }

  currentdepenses: any;
  ModelelistDefault =
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
    console.log(this.modeledepenseservice.selectedModele);
  }
savetransaction(titre: string , depense: Depenses) {
    const transaction = new Transaction();
    const d = new Date().getDate();
    const m = (new Date().getMonth()) + 1 ;
    const y = new Date().getFullYear();
    transaction.date = d + '-' + m + '-' + y;
    console.log(transaction.date);
  transaction.titre = titre;
    this.transactionservice.insertTransaction(transaction, depense);
}
  async savedepense() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    const newdepenseKey = this.depenseservice.getnewdepenseKey('Depenses/Depenses');
    this.currentFileUpload = new FileUpload(file);
   await this.depenseservice.insertDepense('Depenses/Depenses', newdepenseKey, this.currentdepenses, this.currentFileUpload, this.progress);
  this.savetransaction('Depenses', this.currentdepenses);
  }
   async savedepenseRecurrent() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.newdepenseKey = await this.depenseservice.getnewdepenseKey('Depenses/DepensesRecurrent');
    this.currentFileUpload = new FileUpload(file);
   await this.depenseservice.insertDepenseRecurrent('Depenses/DepensesRecurrent', this.newdepenseKey,
      this.currentdepenses, this.currentFileUpload, this.progress);
     this.savetransaction('DepensesRecurrent', this.currentdepenses);
      this.alertservice.insertAlert('Depenses/DepensesRecurrent', this.newdepenseKey, this.alerts) ;
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
