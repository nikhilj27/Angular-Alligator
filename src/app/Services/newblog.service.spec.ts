import { TestBed } from '@angular/core/testing';

import { NewblogService } from './newblog.service';

describe('NewblogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewblogService = TestBed.get(NewblogService);
    expect(service).toBeTruthy();
  });
});
