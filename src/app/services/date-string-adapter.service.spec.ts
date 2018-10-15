import { TestBed } from '@angular/core/testing';

import { DateStringAdapterService } from './date-string-adapter.service';

describe('DateStringAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateStringAdapterService = TestBed.get(DateStringAdapterService);
    expect(service).toBeTruthy();
  });
});
