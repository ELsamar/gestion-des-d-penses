import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionalitesComponent } from './fonctionalites.component';

describe('FonctionalitesComponent', () => {
  let component: FonctionalitesComponent;
  let fixture: ComponentFixture<FonctionalitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonctionalitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonctionalitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
