import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import {RevenusService} from '../../../../shared/services/revenus.service';
import {Revenus,FileUpload} from '../../../../shared/models/revenus';
import {FormGroup, NgForm} from '@angular/forms';
import {AuthService} from '../../../../providers/auth.service';
import {AlertService} from '../../../../shared/services/alert.service';
import {Alert} from '../../../../shared/models/alert';
@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.css']
})
export class RevenuComponent implements OnInit {
  /*selectedModel: Modelerevenu;*/
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = {percentage: 0};
  /*Modelelist: ModeleRevenu [];*/
  currentalert: Alert = new Alert();
  repetes: any = ['Jamais', 'Semaine', 'mois'];
  semaines: any = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  Mois: any = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  alerts: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  ajoute = false;
  constructor(private alertservice: AlertService, private revenusservice: RevenusService, public authservice: AuthService,) {
  }

  currentrevenus: any;
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
    this.currentrevenus = new Revenus();
    /*let x = this.modelerevenuservice.getdataauth();
    x.snapshotChanges().subscribe(item => {
      this.Modelelist = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.Modelelist.push(y as Modelerevenue);
      });
    });
    }

  selectModelAction(model: any) {
    console.log('test');
    this.modelerevenuservice.selectedModele = Object.assign({}, model);
    console.log(this.modelerevenuservice.selectedModele);
  }*/
  }
  saverevenu() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    const newrevenuKey = this.revenusservice.getnewrevenusKey('Revenus/Revenus');
    this.currentFileUpload = new FileUpload(file);
    this.revenusservice.insertrevenus('Revenus/Revenus', newrevenuKey, this.currentrevenus, this.currentFileUpload, this.progress)
     
  }

  saverevenuRecurrent() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    const newrevenuKey = this.revenusservice.getnewrevenusKey('Revenus/RevenusRecurrent');
    this.currentFileUpload = new FileUpload(file);
    this.revenusservice.insertrevenusRecurrent('Revenus/RevenusRecurrent', newrevenuKey,
      this.currentrevenus, this.currentFileUpload, this.progress);
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
