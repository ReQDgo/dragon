import { TestBed } from '@angular/core/testing';

import { ComunicacionServiceService } from './comunicacion-service.service';

describe('ComunicacionServiceService', () => {
  let service: ComunicacionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
