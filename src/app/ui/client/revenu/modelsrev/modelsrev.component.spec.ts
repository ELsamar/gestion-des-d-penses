import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsrevComponent } from './modelsrev.component';

describe('ModelsrevComponent', () => {
  let component: ModelsrevComponent;
  let fixture: ComponentFixture<ModelsrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
