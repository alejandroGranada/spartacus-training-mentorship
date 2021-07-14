import { Action } from '@ngrx/store';
import { UserProfile } from '../../model';
import { StateUtils } from '@spartacus/core';
import { USER_PROFILE } from '../tc-user-profile-state';

export const LOAD_USER_PROFILE = '[UserProfile] Load User Profile';
export const LOAD_USER_PROFILE_SUCCESS = '[UserProfile] Load User Profile Success';
export const LOAD_USER_PROFILE_FAIL = '[UserProfile] Load User Profile Fail';
export const CLEAR_USER_PROFILE = '[UserProfile] Clear User Profile';

export class LoadUserProfile extends StateUtils.LoaderLoadAction {
  readonly type = LOAD_USER_PROFILE;
  constructor(public payload: string) {
    super(USER_PROFILE);
  }
}

export class LoadUserProfileSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = LOAD_USER_PROFILE_SUCCESS;
  constructor(public payload: UserProfile) {
    super(USER_PROFILE);
  }
}

export class LoadUserProfileFail extends StateUtils.LoaderFailAction {
  readonly type = LOAD_USER_PROFILE_FAIL;
  constructor(public payload: any) {
    super(USER_PROFILE, payload);
  }
}

export class ClearUserProfile implements Action {
  readonly type = CLEAR_USER_PROFILE;
}

export type TcUserProfileAction =
  | LoadUserProfile
  | LoadUserProfileSuccess
  | LoadUserProfileFail
  | ClearUserProfile;
