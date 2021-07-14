import { Injectable } from '@angular/core';
import { facadeFactory } from '@spartacus/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../../core';
import { TC_USER_PROFILE_CORE_FEATURE } from '../feature-name';

export function tcUserProfileFacadeFactory(): TcUserProfileFacade {
  return facadeFactory({
    facade: TcUserProfileFacade,
    feature: TC_USER_PROFILE_CORE_FEATURE,
    methods: [
      'getUserProfile',
      'loadUserProfile',
      'getUserProfileResLoading',
      'getUserProfileResSuccess',
      'getUserProfileResError',
    ],
  });
}

@Injectable({
  providedIn: 'root',
  useFactory: tcUserProfileFacadeFactory,
})
export abstract class TcUserProfileFacade {
  abstract getUserProfile(loadIfMissing: boolean): Observable<UserProfile>;

  abstract loadUserProfile(): void;

  abstract getUserProfileResLoading(): Observable<boolean>;

  abstract getUserProfileResSuccess(): Observable<boolean>;

  abstract getUserProfileResError(): Observable<boolean>;
}
