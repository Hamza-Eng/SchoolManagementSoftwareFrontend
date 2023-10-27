import { TestBed } from '@angular/core/testing';

import { CycleService } from './cycle.service';

describe('CycleService', () => {
  let service: CycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
