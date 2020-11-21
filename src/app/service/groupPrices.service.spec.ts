import { TestBed } from '@angular/core/testing';

import { GroupPricesService } from './groupPrices.service';

describe('GroupPricesService', () => {
  let service: GroupPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
