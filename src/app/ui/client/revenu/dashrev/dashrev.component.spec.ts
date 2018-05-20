import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashrevComponent } from './dashrev.component';

describe('DashrevComponent', () => {
  let component: DashrevComponent;
  let fixture: ComponentFixture<DashrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
