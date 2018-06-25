import { Injectable } from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Alert} from '../models/alert';
import {Depenses} from '../models/depenses';
import * as firebase from 'firebase';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AlertService {
  alertlist: AngularFireList<any>;
 alert: Alert ;
 list: AngularFireList<Depenses>;
  currentUserId = localStorage.getItem('userid');
  constructor(private db: AngularFireDatabase, public authservice: AuthService, private toastr: ToastrService) { }
  getalertauth( bath: string) {
    const myUserId = this.authservice.currentUserId;
    console.log(myUserId);
    return this.db.list<Alert>(bath,
      ref => ref.orderByChild('idauth').startAt(myUserId).endAt(myUserId + '\uf8ff'));
  }
async  insertAlert ( newdepenseKey: string, newrevenuKey: string, newprojetKey: string, alert: Alert ) {
  const newalertKey = this.db.database.ref('Alerte').child(this.currentUserId).push().key;
  const alertlist = this.db.database.ref('Alerte').child(this.currentUserId).child(newalertKey);

   await alertlist.set({
      msgalert : alert.msgalert,
     datealert : alert.datealert,
     idDepense : newdepenseKey,
     idRevenu : newrevenuKey,
     idProjet : newprojetKey
    }) ;
   this.toastr.success('Alerte', 'Alerte ajoutèe');
  }
  updateAlert(alert: Alert) {
    this.alertlist.update(alert.$idalert,
      {
        idauth: this.authservice.currentUserId,
        msgalert : alert.msgalert,
        datealert: alert.datealert
    });
  }
  deleteDepense($idalert: string) {
    this.alertlist.remove($idalert);
  }

}
