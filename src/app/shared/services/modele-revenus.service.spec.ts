import { TestBed, inject } from '@angular/core/testing';

import { ModeleRevenusService } from './modele-revenus.service';

describe('ModeleRevenusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModeleRevenusService]
    });
  });

  it('should be created', inject([ModeleRevenusService], (service: ModeleRevenusService) => {
    expect(service).toBeTruthy();
  }));
});
