import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldepenseComponent } from './modeldepense.component';

describe('ModeldepenseComponent', () => {
  let component: ModeldepenseComponent;
  let fixture: ComponentFixture<ModeldepenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldepenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
