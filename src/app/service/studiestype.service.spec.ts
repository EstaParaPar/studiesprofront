import { TestBed } from '@angular/core/testing';

import { StudiestypeService } from './studiestype.service';

describe('StudiestypeService', () => {
  let service: StudiestypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudiestypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
