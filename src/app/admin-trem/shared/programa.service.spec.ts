import { TestBed, inject } from '@angular/core/testing';

import { ProgramaService } from './programa.service';

describe('ProgramaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramaService]
    });
  });

  it('should ...', inject([ProgramaService], (service: ProgramaService) => {
    expect(service).toBeTruthy();
  }));
});
