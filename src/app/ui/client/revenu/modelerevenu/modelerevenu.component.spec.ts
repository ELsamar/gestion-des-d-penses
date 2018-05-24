import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelerevenuComponent } from './modelerevenu.component';

describe('ModelsrevComponent', () => {
  let component: ModelerevenuComponent;
  let fixture: ComponentFixture<ModelerevenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelerevenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelerevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
