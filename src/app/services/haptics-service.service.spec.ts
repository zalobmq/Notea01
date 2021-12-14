import { TestBed } from '@angular/core/testing';

import { HapticsServiceService } from './haptics-service.service';

describe('HapticsServiceService', () => {
  let service: HapticsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HapticsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
