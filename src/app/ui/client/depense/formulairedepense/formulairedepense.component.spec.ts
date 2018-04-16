import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairedepenseComponent } from './formulairedepense.component';

describe('FormulairedepenseComponent', () => {
  let component: FormulairedepenseComponent;
  let fixture: ComponentFixture<FormulairedepenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairedepenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairedepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
