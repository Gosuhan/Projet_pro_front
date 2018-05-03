import { TestBed, inject } from '@angular/core/testing';

import { NiveauSavoirService } from './niveau-savoir.service';

describe('NiveauSavoirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NiveauSavoirService]
    });
  });

  it('should be created', inject([NiveauSavoirService], (service: NiveauSavoirService) => {
    expect(service).toBeTruthy();
  }));
});
