import { Injectable } from '@angular/core';
import { Converter } from '@spartacus/core';
import { OccUserProfile } from '../model';
import { UserProfile } from '../../core';

@Injectable({ providedIn: 'root' })
export class TcUserProfileNormalizer implements Converter<OccUserProfile, UserProfile> {
  convert(source: OccUserProfile, target?: UserProfile): UserProfile {
    if (target === undefined) {
      target = { ...source } as UserProfile;
    }
    return target;
  }
}
