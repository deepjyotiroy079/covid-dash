import { TestBed } from '@angular/core/testing';

import { CoronaStatsHistoryService } from './corona-stats-history.service';

describe('CoronaStatsHistoryService', () => {
  let service: CoronaStatsHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaStatsHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
