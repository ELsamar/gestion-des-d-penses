import { Component, OnInit ,Directive, ElementRef, HostListener, Renderer, forwardRef } from '@angular/core';
import { ProjetsService } from '../../../../shared/services/projets.service';
import {Projets , Priorite } from '../../../../shared/models/projets';
import {FormsModule, NgForm ,ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
/*export const DATE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() =>NG_VALUE_ACCESSOR),
  multi: true
};*/
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css'],
  providers: [
    ProjetsService
    ],
})
export class ProjetComponent implements OnInit {
  currentalert: any ;
  nbr: any ;
  alerts: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  priorites: Priorite[] = [
    { id : 1 , nom : 'forte'},
    { id : 2 , nom : 'moyenne'},
    { id : 3 , nom : 'faible'},
  ];
  constructor(private projetservice: ProjetsService, private _elementRef: ElementRef) { }

  currentprojet: Projets;
  ngOnInit() {
    this.currentprojet = new Projets();
      this.currentprojet.$idprojet = null;
      this.currentprojet.dateprojet = null;
      this.currentprojet.montantprojet = null;
      this.currentprojet.titreprojet = null;
      this.currentprojet.descriptionprojet = null;
      this.currentprojet.prioriteprojet = null;
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
  onSubmit(projetForm: NgForm) {
    this.projetservice.insertProjet(projetForm.value);
}
/*@HostListener('input', ['$event.target.valueAsDate']) onChange = (_: any) => { };
  @HostListener('blur', []) onTouched = () => { };

  writeValue(value: Date): void {
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'valueAsDate', value);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }*/


}
