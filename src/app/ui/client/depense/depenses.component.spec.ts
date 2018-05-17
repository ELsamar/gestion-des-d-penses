import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensesComponent } from './depenses.component';

describe('DepenseComponent', () => {
  let component: DepensesComponent;
  let fixture: ComponentFixture<DepensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
