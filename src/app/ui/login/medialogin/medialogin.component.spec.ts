import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedialoginComponent } from './medialogin.component';

describe('MedialoginComponent', () => {
  let component: MedialoginComponent;
  let fixture: ComponentFixture<MedialoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedialoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedialoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
