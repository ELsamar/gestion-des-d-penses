import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import {RevenusService} from '../../../../shared/services/revenus.service';
import {Revenus, FileUpload} from '../../../../shared/models/revenus';
import {FormGroup, NgForm} from '@angular/forms';
import {TransactionService} from '../../../../shared/services/transaction.service';
import {Transaction} from '../../../../shared/models/transaction';
import {AuthService} from '../../../../providers/auth.service';
import {AlertService} from '../../../../shared/services/alert.service';
import {Alert} from '../../../../shared/models/alert';
import {ModeleRevenus} from '../../../../shared/models/modele-revenus';
import {ModeleRevenusService} from '../../../../shared/services/modele-revenus.service';

@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.css']
})
export class RevenuComponent implements OnInit {
  categories: any = ['Salaires Net', 'Bourses', 'Remboursements Sécurité Sociale', 'prêt bancaire',
    'allocation familiale', 'Aides diverses', 'avance et acompte'];
  revenusForm: FormGroup;
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = {percentage: 0};
  currentalert: Alert = new Alert();
  repetes: any = ['Jamais', 'Semaine', 'mois'];
  semaines: any = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  Mois: any = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  alerts: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  currentrevenus: any;
  nbr: any;
  Modelelist: ModeleRevenus [];
  private titre = 'choissisez une modeles';
  constructor(private revenuservice: RevenusService, public authservice: AuthService, private alertservice: AlertService,
              private transactionservice: TransactionService, private modelerevenuservice: ModeleRevenusService) { }
  ngOnInit() {
    this.currentrevenus = new Revenus();
    let x = this.modelerevenuservice.getdataauth();
    x.snapshotChanges().subscribe(item => {
      this.Modelelist = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.Modelelist.push(y as ModeleRevenus);
      });
    });
    }

  selectModelAction(model: any) {
    this.modelerevenuservice.selectedModele = Object.assign({}, model);
    this.titre = this.modelerevenuservice.selectedModele.titreModele;
    this.currentrevenus.titrerevenu = this.modelerevenuservice.selectedModele.titreModele;
    this.currentrevenus.montantrevenu = this.modelerevenuservice.selectedModele.montantModele;
    this.currentrevenus.descriptionrevenu = this.modelerevenuservice.selectedModele.descriptionModele;
    this.currentrevenus.categorierevenu = this.modelerevenuservice.selectedModele.categorieModele;
  }
  async  savealert(titre: string, key: string ) {
      let d = new Date();
    console.log(this.nbr);
      d.setDate(d.getDate() - this.nbr);
    this.currentalert.datealert = d;
    console.log(this.currentalert.datealert);
      this.currentalert.msgalert = ('pour votre revenu' + titre + '  reste ' + this.nbr + ' jours ' );
     return this.currentalert.datealert ;
    }
async  onSubmit(revenusForm: NgForm) {
    await this.saverevenu();
    this.savetransaction('revenus', this.currentrevenus );
  }
  savetransaction(titre: string , revenus: Revenus) {
    const transaction = new Transaction();
    const d = new Date().getDate();
    const m = (new Date().getMonth()) + 1 ;
    const y = new Date().getFullYear();
    transaction.date = d + '-' + m + '-' + y;
    transaction.titre = titre;
    this.transactionservice.insertTransaction(transaction, revenus);
  }

 async saverevenu() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    const newrevenuKey = this.revenuservice.getnewrevenusKey('Revenus/Revenus');
    this.currentFileUpload = new FileUpload(file);
   await this.revenuservice.insertrevenus('Revenus/Revenus', newrevenuKey, this.currentrevenus, this.currentFileUpload, this.progress);
   this.savetransaction('Revenu', this.currentrevenus );
  }

 async saverevenuRecurrent() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    const newrevenuKey = this.revenuservice.getnewrevenusKey('Revenus/RevenusRecurrent');
    this.currentFileUpload = new FileUpload(file);
   await this.revenuservice.insertrevenusRecurrent('Revenus/RevenusRecurrent', newrevenuKey,
      this.currentrevenus, this.currentFileUpload, this.progress);
   this.savetransaction('Revenus Recurrent', this.currentrevenus );
   await this.savealert(this.currentrevenus.titrerevenu, newrevenuKey).then( () =>
      this.alertservice.insertAlert('null', newrevenuKey, 'null', this.currentalert)
   );
   console.log(this.currentalert);
  }
  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
}
