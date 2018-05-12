import { Injectable } from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Alert} from '../models/alert';
import {Depenses} from '../models/depenses';
import * as firebase from 'firebase';

@Injectable()
export class AlertService {
 alertlist: AngularFireList<any>;
 alert: Alert ;
 list: AngularFireList<Depenses>;
  constructor(private db: AngularFireDatabase, public authservice: AuthService) { }
  getalertauth( bath: string) {
    let myUserId = this.authservice.currentUserId;
    console.log(myUserId);
    return this.db.list<Alert>(bath,
      ref => ref.orderByChild('idauth').startAt(myUserId).endAt(myUserId + '\uf8ff'));
  }
  insertAlert (alert: Alert ) {
    this.alertlist = this.db.list('Alert');
    this.alertlist.push({
      idauth : this.authservice.currentUserId ,
      msg : alert.msg,
      date: alert.date
    }) ;
  }

  updateAler(alert: Alert) {
    this.alertlist.update(alert.$idalert,
      {
        idauth: this.authservice.currentUserId,
        msg : alert.msg,
        date: alert.date
    });
  }
  deleteDepense($idalert: string) {
    this.alertlist.remove($idalert);
  }

}
