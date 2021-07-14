import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig, provideDefaultConfig, provideDefaultConfigFactory } from '@spartacus/core';
import { defaultUserProfileLayoutConfig, tcUserProfileRoutingConfig } from './config';
import { TC_USER_PROFILE_CORE_FEATURE, TC_USER_PROFILE_FEATURE } from './feature-name';

export function defaultTcUserProfileComponentsConfig(): CmsConfig {
  return {
    featureModules: {
      [TC_USER_PROFILE_FEATURE]: {
        cmsComponents: ['AccountUserProfileComponent'],
      },
      [TC_USER_PROFILE_CORE_FEATURE]: TC_USER_PROFILE_FEATURE,
    },
  };
}

@NgModule({
  declarations: [],
  providers: [
    provideDefaultConfig(tcUserProfileRoutingConfig),
    provideConfig(defaultUserProfileLayoutConfig),
    provideDefaultConfigFactory(defaultTcUserProfileComponentsConfig),
  ],
})
export class TcUserProfileRootModule {}
