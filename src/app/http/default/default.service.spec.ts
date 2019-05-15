import { TestBed } from '@angular/core/testing';

import { DefaultService } from './default.service';

describe('DefaultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultService = TestBed.get(DefaultService);
    expect(service).toBeTruthy();
  });
});
