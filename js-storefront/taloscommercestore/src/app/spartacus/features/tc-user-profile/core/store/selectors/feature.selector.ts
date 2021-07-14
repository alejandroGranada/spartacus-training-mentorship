import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { TC_USER_PROFILE_FEATURE } from '../../../root';
import { UserProfileState, StateWithUserProfile } from '../tc-user-profile-state';

export const getStateWithUserProfile: MemoizedSelector<StateWithUserProfile, UserProfileState> =
  createFeatureSelector<UserProfileState>(TC_USER_PROFILE_FEATURE);
