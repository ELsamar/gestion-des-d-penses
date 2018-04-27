import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DepensesService } from '../../../../shared/services/depenses.service';
import { Depenses } from '../../../../shared/models/depenses';
import {FormsModule, NgForm} from '@angular/forms';
@Component({
  selector: 'app-formulairedepense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css'] ,
  providers: [
  DepensesService,
  ],
})
export class DepenseComponent implements OnInit {
  typdep :any =  ["D'aprés module","...","..."];
  cathegories :any = ["Transport/Vehicule","Loisir","Eléctricité"];
  repetes :any = ["Jamais" , "Semaine" , "mois"];
  semaines : any =["Lundi" , "Mardi" , "Mercredi" , "Jeudi" , "Vendredi" , "Samedi" , "Dimanche"];
  mois : any =["1" ,"2" ,"3" ,"4" , "5" , "6" ,"7" , "8" ,"9" ,"10" ,"11" ,"12"];
  averts :any =["1" ,"2" ,"3" ,"4" , "5" , "6" ,"7" , "8" ,"9" ,"10" ,"11" ,"12" ,"13" ,"14" , "15" , "16" ,"17" , "18" ,"19" ,"20" ,"21" ,"22"];
  constructor(private depenseservice:DepensesService) { }
  currentdepenses: Depenses;
  ngOnInit() {
      this.currentdepenses = new Depenses();
      this.currentdepenses.$iddepense = null;
      this.currentdepenses.datedepense = null;
      this.currentdepenses.montantdepense= null;
      this.currentdepenses.titredepense = null;
      this.currentdepenses.cathegoriedepense = null;
      this.currentdepenses.descriptiondepense = null;
      this.currentdepenses.justificatifdepense = null;

    }
    onSubmit(depensesForm: NgForm) {
       this.depenseservice.insertDepense(depensesForm.value);
   }
/*<createForm() {
    this.form = this.fb.group(
      {
      dateTo: ['', Validators.required ],
      dateFrom: ['', Validators.required ],
    },
      {validator: this.dateLessThan('dateFrom', 'dateTo')});
  }
  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: 'Date from should be less than Date to'
        };
      }
      return {};
    }
  }

  onSubmit() {
    console.log('Probando')
    console.log(this.form)
    console.log(this.form.value)
  }*/
  

}
