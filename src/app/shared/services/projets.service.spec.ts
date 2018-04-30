import { TestBed, inject } from '@angular/core/testing';

import { ProjetsService } from './projets.service';

describe('ProjetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetsService]
    });
  });

  it('should be created', inject([ProjetsService], (service: ProjetsService) => {
    expect(service).toBeTruthy();
  }));
});
