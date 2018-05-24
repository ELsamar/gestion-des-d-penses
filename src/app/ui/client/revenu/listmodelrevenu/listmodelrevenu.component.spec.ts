import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmodelrevenuComponent } from './listmodelrevenu.component';

describe('ListmodelsrevComponent', () => {
  let component: ListmodelrevenuComponent;
  let fixture: ComponentFixture<ListmodelrevenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmodelrevenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmodelrevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
