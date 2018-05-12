import { Component, OnInit } from '@angular/core';
import {ModeleDépense} from '../../../../shared/models/modele-dépense';
import {ModeleDépenseService} from '../../../../shared/services/modele-dépense.service';

@Component({
  selector: 'app-modeldepense',
  templateUrl: './modeldepense.component.html',
  styleUrls: ['./modeldepense.component.css']
})
export class ModeldepenseComponent implements OnInit {
  cathegories: any = ['Transport/Vehicule', 'Loisir', ' Eléctricité'];
  currentModeleDepense: ModeleDépense ;
  constructor(private ModeleDépenseservice: ModeleDépenseService) { }

  ngOnInit() {
    this.currentModeleDepense = new ModeleDépense();
  }
  saveModeleDepense() {
    this.ModeleDépenseservice.insertModeleDépense(this.currentModeleDepense);
  }

}
