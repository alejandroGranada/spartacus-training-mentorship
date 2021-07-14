import { TC_USER_PROFILE_FEATURE } from '../../root';
import { UserProfile } from '../model';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';

export const USER_PROFILE = '[UserProfile] User Profile';

export interface StateWithUserProfile {
  [TC_USER_PROFILE_FEATURE]: UserProfileState;
}

export interface UserProfileState {
  userProfile: LoaderState<UserProfile>;
}
