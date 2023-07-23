import { TestBed } from '@angular/core/testing';

import { ActivitesServiceService } from './activites-service.service';

describe('ActivitesServiceService', () => {
  let service: ActivitesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
