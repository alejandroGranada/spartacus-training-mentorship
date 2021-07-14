import { TestBed } from '@angular/core/testing';

import { TcUserProfileService } from './tc-user-profile.service';

describe('TcReferredCustomerService', () => {
  let service: TcUserProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcUserProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
