import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../../../../shared/services/projets.service';
import {Projets } from '../../../../shared/models/projets';
import {FormsModule, NgForm} from '@angular/forms';
@Component({
  selector: 'app-listprojets',
  templateUrl: './listprojets.component.html',
  styleUrls: ['./listprojets.component.css']
})
export class ListprojetsComponent implements OnInit {
  projetlist: Projets[];
  constructor(private projetservice: ProjetsService) { }
  ngOnInit() {
    var x = this.projetservice.getProjet();
    x.snapshotChanges().subscribe(item => {
      this.projetlist = [];
     
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.projetlist.push(y as Projets);
      });
    });
  }
  onDelete(key: string) {
    if (confirm('éte vous sure de supprimer ce projet ?') == true) {
      this.projetservice.deleteProjet(key);
    }
    }
}
