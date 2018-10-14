import { TestBed } from '@angular/core/testing';

import { WorkoutsApiService } from './workouts-api.service';

describe('WorkoutsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutsApiService = TestBed.get(WorkoutsApiService);
    expect(service).toBeTruthy();
  });
});
