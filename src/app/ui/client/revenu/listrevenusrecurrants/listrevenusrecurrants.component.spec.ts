import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrevenusrecurrantsComponent } from './listrevenusrecurrants.component';

describe('ListrevenusrecurrantsComponent', () => {
  let component: ListrevenusrecurrantsComponent;
  let fixture: ComponentFixture<ListrevenusrecurrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrevenusrecurrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrevenusrecurrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
