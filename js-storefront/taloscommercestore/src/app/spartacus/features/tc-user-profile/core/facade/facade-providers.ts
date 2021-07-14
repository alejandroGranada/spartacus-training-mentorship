import { Provider } from '@angular/core';
import { TcUserProfileFacade } from '../../root';
import { TcUserProfileService } from './tc-user-profile.service';

export const facadeProviders: Provider[] = [
  TcUserProfileService,
  {
    provide: TcUserProfileFacade,
    useExisting: TcUserProfileService,
  },
];
