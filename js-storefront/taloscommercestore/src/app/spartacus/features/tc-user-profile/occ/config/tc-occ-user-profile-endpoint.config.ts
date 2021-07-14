import { OccConfig } from '@spartacus/core';

export const tcOccUserProfileConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        userProfile: '/users/${userId}',
      },
    },
  },
};
