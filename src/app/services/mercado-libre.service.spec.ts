import { TestBed } from '@angular/core/testing';

import { MercadoLibreService } from './mercado-libre.service';

describe('MercadoLibreService', () => {
  let service: MercadoLibreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercadoLibreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
