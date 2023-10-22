import { TestBed } from '@angular/core/testing';

import { EtablissementService } from './etablissement.service';

describe('EtablissementService', () => {
  let service: EtablissementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtablissementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
