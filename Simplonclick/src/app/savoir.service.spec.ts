import { TestBed, inject } from '@angular/core/testing';

import { SavoirService } from './savoir.service';

describe('SavoirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavoirService]
    });
  });

  it('should be created', inject([SavoirService], (service: SavoirService) => {
    expect(service).toBeTruthy();
  }));
});
