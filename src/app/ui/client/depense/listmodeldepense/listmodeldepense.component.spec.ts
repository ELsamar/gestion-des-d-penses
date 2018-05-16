import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmodeldepenseComponent } from './listmodeldepense.component';

describe('ListmodeldepenseComponent', () => {
  let component: ListmodeldepenseComponent;
  let fixture: ComponentFixture<ListmodeldepenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmodeldepenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmodeldepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
