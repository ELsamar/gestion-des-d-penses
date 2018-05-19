import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmodelsrevComponent } from './listmodelsrev.component';

describe('ListmodelsrevComponent', () => {
  let component: ListmodelsrevComponent;
  let fixture: ComponentFixture<ListmodelsrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmodelsrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmodelsrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
