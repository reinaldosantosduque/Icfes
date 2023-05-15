import { TestBed } from '@angular/core/testing';

import { JoyaService } from './joya.service';

describe('JoyaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoyaService = TestBed.get(JoyaService);
    expect(service).toBeTruthy();
  });
});
