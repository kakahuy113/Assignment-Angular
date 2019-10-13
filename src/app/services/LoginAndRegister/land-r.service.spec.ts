import { TestBed } from '@angular/core/testing';

import { LandRService } from './land-r.service';

describe('LandRService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandRService = TestBed.get(LandRService);
    expect(service).toBeTruthy();
  });
});
