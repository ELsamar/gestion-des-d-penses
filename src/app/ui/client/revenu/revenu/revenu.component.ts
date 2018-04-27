import { Component, OnInit } from '@angular/core'
import { RevenusService } from '../../../../shared/services/revenus.service';
import { Revenus } from '../../../../shared/models/revenus';
import {FormsModule, NgForm} from '@angular/forms';
@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.css']
})
export class RevenuComponent implements OnInit {
  typrev :any =  ["D'aprés module","...","..."];
  repetes :any = ["Jamais" , "Semaine" , "mois"];
  semaines : any =["Lundi" , "Mardi" , "Mercredi" , "Jeudi" , "Vendredi" , "Samedi" , "Dimanche"];
  mois : any =["1" ,"2" ,"3" ,"4" , "5" , "6" ,"7" , "8" ,"9" ,"10" ,"11" ,"12"];
  averts :any =["1" ,"2" ,"3" ,"4" , "5" , "6" ,"7" , "8" ,"9" ,"10" ,"11" ,"12" ,"13" ,"14" , "15" , "16" ,"17" , "18" ,"19" ,"20" ,"21" ,"22"];
  
  revenusForm : NgForm;
  currentrevenus: Revenus;
  constructor(private revenuservice:RevenusService) {
   }
  ngOnInit() {
  
  this.currentrevenus = new Revenus();
  this.currentrevenus.$idrevenu = null;
  this.currentrevenus.daterevenu = null;
  this.currentrevenus.montantrevenu= null;
  this.currentrevenus.titrerevenu = null;
  this.currentrevenus.descriptionrevenu = null;
  this.currentrevenus.justificatifrevenu = null;
}
onSubmit(revenusForm: NgForm) {
  this.revenuservice.insertRevenu(revenusForm.value);
}
}
