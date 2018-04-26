import { TestBed, inject } from '@angular/core/testing';

import { CategorieSavoirService } from './categorie-savoir.service';

describe('CategorieSavoirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategorieSavoirService]
    });
  });

  it('should be created', inject([CategorieSavoirService], (service: CategorieSavoirService) => {
    expect(service).toBeTruthy();
  }));
});
