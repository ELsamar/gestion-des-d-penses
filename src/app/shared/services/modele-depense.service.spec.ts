import { TestBed, inject } from '@angular/core/testing';

import { ModeleDepenseService } from './modele-depense.service';

describe('ModeleDepenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModeleDepenseService]
    });
  });

  it('should be created', inject([ModeleDepenseService], (service: ModeleDepenseService) => {
    expect(service).toBeTruthy();
  }));
});
