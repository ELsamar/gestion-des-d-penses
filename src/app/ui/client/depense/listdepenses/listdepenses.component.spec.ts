import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdepensesComponent } from './listdepenses.component';

describe('ListdepensesComponent', () => {
  let component: ListdepensesComponent;
  let fixture: ComponentFixture<ListdepensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdepensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdepensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
