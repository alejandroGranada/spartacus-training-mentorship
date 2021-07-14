import { RoutesConfig, RoutingConfig } from '@spartacus/core';

export const defaultUserProfileRoutesConfig: RoutesConfig = {
  userProfile: { paths: ['my-account/user-profile'], protected: true },
};

export const tcUserProfileRoutingConfig: RoutingConfig = {
  routing: {
    routes: defaultUserProfileRoutesConfig,
  },
};
