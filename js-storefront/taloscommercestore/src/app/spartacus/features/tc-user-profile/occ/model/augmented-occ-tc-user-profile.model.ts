import { OccEndpoint } from '@spartacus/core';

declare module '@spartacus/core' {
  interface OccEndpoints {

    userProfile?: string | OccEndpoint;
  }
}
