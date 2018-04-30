import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenulistComponent } from './revenulist.component';

describe('RevenulistComponent', () => {
  let component: RevenulistComponent;
  let fixture: ComponentFixture<RevenulistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenulistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
