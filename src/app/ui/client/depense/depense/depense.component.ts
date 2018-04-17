import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-formulairedepense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css']
})
export class DepenseComponent implements OnInit {
  form: FormGroup
  constructor( private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      dateTo: ['', Validators.required ],
      dateFrom: ['', Validators.required ]
    }, {validator: this.dateLessThan('dateFrom', 'dateTo')});
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
  }
  ngOnInit() {
  }

}
