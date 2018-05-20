import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrevenuComponent } from './listrevenu.component';

describe('RevenulistComponent', () => {
  let component: ListrevenuComponent;
  let fixture: ComponentFixture<ListrevenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrevenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
