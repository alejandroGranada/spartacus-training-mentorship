import { TcUserProfileActions } from '../actions';
import { UserProfile } from '../../model';

export const initialState: UserProfile = undefined;

export function reducer(
  state = initialState,
  action: TcUserProfileActions.TcUserProfileAction
): UserProfile {
  switch (action.type) {
    case TcUserProfileActions.LOAD_USER_PROFILE_SUCCESS: {
      return action.payload ? action.payload : initialState;
    }

    case TcUserProfileActions.LOAD_USER_PROFILE_FAIL: {
      return initialState;
    }

    case TcUserProfileActions.CLEAR_USER_PROFILE: {
      return initialState;
    }
  }
  return state;
}
