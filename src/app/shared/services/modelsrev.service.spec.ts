import { TestBed, inject } from '@angular/core/testing';

import { ModelsrevService } from './modelsrev.service';

describe('ModelsrevService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelsrevService]
    });
  });

  it('should be created', inject([ModelsrevService], (service: ModelsrevService) => {
    expect(service).toBeTruthy();
  }));
});
