import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';
import { UserProfile } from '../../model';

export const USER_PROFILE_NORMALIZER = new InjectionToken<Converter<any, UserProfile>>(
  'UserProfileNormalizer'
);