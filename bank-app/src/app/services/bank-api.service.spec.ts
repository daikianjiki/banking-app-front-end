import { TestBed } from '@angular/core/testing';

import { BankAPIService } from './bank-api.service';

describe('BankAPIService', () => {
  let service: BankAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
