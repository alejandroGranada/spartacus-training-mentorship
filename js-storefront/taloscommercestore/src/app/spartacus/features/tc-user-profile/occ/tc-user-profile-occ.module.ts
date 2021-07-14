import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { OccTcUserProfileAdapter } from './adapters';
import { tcOccUserProfileConfig } from './config';
import { TcUserProfileNormalizer } from './converters';
import { TcUserProfileAdapter } from '../core';
import { USER_PROFILE_NORMALIZER } from '../core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideConfig(tcOccUserProfileConfig),
    { provide: TcUserProfileAdapter, useClass: OccTcUserProfileAdapter },
    { provide: USER_PROFILE_NORMALIZER, useExisting: TcUserProfileNormalizer, multi: true },
  ],
})
export class TcUserProfileOccModule {}
