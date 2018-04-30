import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprojetsComponent } from './listprojets.component';

describe('ListprojetsComponent', () => {
  let component: ListprojetsComponent;
  let fixture: ComponentFixture<ListprojetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListprojetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprojetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
