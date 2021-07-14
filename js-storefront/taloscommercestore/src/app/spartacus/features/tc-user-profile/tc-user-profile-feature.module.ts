import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { tcUserProfileTranslationChunksConfig } from './assets';
import { TC_USER_PROFILE_FEATURE, TcUserProfileRootModule } from './root';

@NgModule({
  imports: [TcUserProfileRootModule],
  providers: [
    provideConfig({
      featureModules: {
        [TC_USER_PROFILE_FEATURE]: {
          module: () => import('./tc-user-profile.module').then((m) => m.TcUserProfileModule),
        },
      },
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: tcUserProfileTranslationChunksConfig,
      },
    }),
  ],
})
export class TcUserProfileFeatureModule {}
