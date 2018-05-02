import { TestBed, inject } from '@angular/core/testing';

import { TypeInscriptionService } from './type-inscription.service';

describe('TypeInscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeInscriptionService]
    });
  });

  it('should be created', inject([TypeInscriptionService], (service: TypeInscriptionService) => {
    expect(service).toBeTruthy();
  }));
});
