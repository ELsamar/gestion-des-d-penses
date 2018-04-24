import { TestBed, inject } from '@angular/core/testing';

import { RevenusService } from './revenus.service';

describe('RevenusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenusService]
    });
  });

  it('should be created', inject([RevenusService], (service: RevenusService) => {
    expect(service).toBeTruthy();
  }));
});
