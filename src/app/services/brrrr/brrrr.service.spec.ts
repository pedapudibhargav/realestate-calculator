import { TestBed } from '@angular/core/testing';

import { BrrrrService } from './brrrr.service';

describe('BrrrrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrrrrService = TestBed.get(BrrrrService);
    expect(service).toBeTruthy();
  });
});
