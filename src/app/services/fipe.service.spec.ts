import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FipeService } from './fipe.service';

describe('FipeService', () => {
  let service: FipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();

    service = TestBed.inject(FipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
