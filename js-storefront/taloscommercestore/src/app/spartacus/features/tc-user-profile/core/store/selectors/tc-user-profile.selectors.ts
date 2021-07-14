import { createSelector, MemoizedSelector } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';
import { UserProfileState, StateWithUserProfile } from '../tc-user-profile-state';
import { UserProfile } from '../../model';
import { getStateWithUserProfile } from './feature.selector';

export const getUserProfileState: MemoizedSelector<
  StateWithUserProfile,
  LoaderState<UserProfile>
> = createSelector(getStateWithUserProfile, (state: UserProfileState) => state.userProfile);

export const getUserProfileValue: MemoizedSelector<StateWithUserProfile, UserProfile> =
  createSelector(getUserProfileState, StateUtils.loaderValueSelector);

/* export const getReferredCustomerByEmail = (
  email: string
): MemoizedSelector<StateWithReferredCustomers, ReferredCustomer> =>
  createSelector(getReferredCustomersValue, (referredCustomers) =>
    referredCustomers.find((referredCustomer) => referredCustomer.email === email)
  ); */

export const getUserProfileLoading: MemoizedSelector<StateWithUserProfile, boolean> = createSelector(
  getUserProfileState,
  StateUtils.loaderLoadingSelector
);

export const getUserProfileSuccess: MemoizedSelector<StateWithUserProfile, boolean> = createSelector(
  getUserProfileState,
  StateUtils.loaderSuccessSelector
);

export const getUserProfileError: MemoizedSelector<StateWithUserProfile, boolean> = createSelector(
  getUserProfileState,
  StateUtils.loaderErrorSelector
);
