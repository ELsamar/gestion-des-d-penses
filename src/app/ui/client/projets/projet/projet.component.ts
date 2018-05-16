import { Component, OnInit ,Directive, ElementRef, HostListener, Renderer, forwardRef } from '@angular/core';
import { ProjetsService } from '../../../../shared/services/projets.service';
import {Projets , priorite } from '../../../../shared/models/projets';
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
  priorites: any = ['forte', 'moyenne', 'faible'];
  constructor(private projetservice: ProjetsService, private _renderer: Renderer, private _elementRef: ElementRef) { }
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
