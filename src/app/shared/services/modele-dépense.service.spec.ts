import { TestBed, inject } from '@angular/core/testing';

import { ModeleDépenseService } from './modele-dépense.service';

describe('ModeleDépenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModeleDépenseService]
    });
  });

  it('should be created', inject([ModeleDépenseService], (service: ModeleDépenseService) => {
    expect(service).toBeTruthy();
  }));
});
