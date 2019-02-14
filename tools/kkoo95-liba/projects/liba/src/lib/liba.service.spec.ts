import { TestBed } from '@angular/core/testing';

import { LibaService } from './liba.service';

describe('LibaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibaService = TestBed.get(LibaService);
    expect(service).toBeTruthy();
  });
});
