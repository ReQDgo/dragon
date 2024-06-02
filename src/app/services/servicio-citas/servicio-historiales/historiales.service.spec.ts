import { TestBed } from '@angular/core/testing';

import { HistorialesService } from './historiales.service';

describe('HistorialesService', () => {
  let service: HistorialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
