import { TestBed } from '@angular/core/testing';

import { GerenteDatosService } from './gerente-datos.service';

describe('GerenteDatosService', () => {
  let service: GerenteDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenteDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
