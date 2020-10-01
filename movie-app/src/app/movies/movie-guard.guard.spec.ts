import { TestBed } from '@angular/core/testing';

import { MovieGuardGuard } from './movie-guard.guard';

describe('MovieGuardGuard', () => {
  let guard: MovieGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MovieGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
