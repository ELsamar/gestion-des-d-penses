import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashdepComponent } from './dashdep.component';

describe('DashdepComponent', () => {
  let component: DashdepComponent;
  let fixture: ComponentFixture<DashdepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashdepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
