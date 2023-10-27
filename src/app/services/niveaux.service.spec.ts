import { TestBed } from '@angular/core/testing';

import { NiveauxService } from './niveaux.service';

describe('NiveauxService', () => {
  let service: NiveauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NiveauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
