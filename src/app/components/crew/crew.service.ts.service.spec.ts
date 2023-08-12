import { TestBed } from '@angular/core/testing';

import { CrewServiceTsService } from './crew.service.ts.service';

describe('CrewServiceTsService', () => {
  let service: CrewServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrewServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
