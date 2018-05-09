import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepensesRecurrentComponent } from './list-depenses-recurrent.component';

describe('ListDepensesRecurrentComponent', () => {
  let component: ListDepensesRecurrentComponent;
  let fixture: ComponentFixture<ListDepensesRecurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepensesRecurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepensesRecurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
