import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import * as fromUserProfile from './tc-user-profile.reducer';
import { USER_PROFILE, UserProfileState } from '../tc-user-profile-state';
import { UserProfile } from '../../model';

export function getReducers(): ActionReducerMap<UserProfileState> {
  return {
    userProfile: StateUtils.loaderReducer<UserProfile[]>(USER_PROFILE, fromUserProfile.reducer),
  };
}

export const reducerToken: InjectionToken<ActionReducerMap<UserProfileState>> = new InjectionToken<
  ActionReducerMap<UserProfileState>
>('UserProfileReducers');

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};
