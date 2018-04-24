import { TestBed, inject } from '@angular/core/testing';

import { DepensesService } from './depenses.service';

describe('DepensesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepensesService]
    });
  });

  it('should be created', inject([DepensesService], (service: DepensesService) => {
    expect(service).toBeTruthy();
  }));
});
