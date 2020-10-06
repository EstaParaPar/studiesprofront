import { TestBed } from '@angular/core/testing';

import { NewStudiesService } from './new-studies.service';

describe('NewStudiesService', () => {
  let service: NewStudiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewStudiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
