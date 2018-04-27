import { Component, OnInit } from '@angular/core';
import { Revenus } from '../../../../shared/models/revenus';
import { RevenusService } from '../../../../shared/services/revenus.service';

@Component({
  selector: 'app-revenulist',
  templateUrl: './revenulist.component.html',
  styleUrls: ['./revenulist.component.css']
})
export class RevenulistComponent implements OnInit {
  revenuslist: Revenus[];
  constructor(private revenuservice: RevenusService) { }

  ngOnInit() {
    var x = this.revenuservice.getRevenu();
    x.snapshotChanges().subscribe(item => {
      this.revenuslist = [];
     
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.revenuslist.push(y as Revenus);
       
      });
    });
  }
  onDelete(key: string) {
    if (confirm('éte vous sure de supprimer ce projet ?') == true) {
      this.revenuservice.deleteRevenu(key);
    }
  }

}
