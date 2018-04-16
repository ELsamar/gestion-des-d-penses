import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairerevenuComponent } from './revenu.component';

describe('FormulairerevenuComponent', () => {
  let component: FormulairerevenuComponent;
  let fixture: ComponentFixture<FormulairerevenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairerevenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairerevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
