import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormErrorsModule, IconModule, SpinnerModule } from '@spartacus/storefront';
import { TcUserProfileCoreModule } from '../core';
import { AuthGuard, CmsConfig, I18nModule, provideDefaultConfig, UrlModule } from '@spartacus/core';
import { TcUserProfileComponent } from './tc-user-profile/tc-user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormErrorsModule,
    RouterModule,
    SpinnerModule,
    UrlModule,
    TcUserProfileCoreModule,
    I18nModule,
    IconModule,
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        AccountUserProfileComponent: {
          component: TcUserProfileComponent,
          guards: [AuthGuard],
        },
      },
    } as CmsConfig),
  ],
  declarations: [TcUserProfileComponent],
  exports: [TcUserProfileComponent],
  entryComponents: [TcUserProfileComponent],
})
export class TcUserProfileComponentsModule {}
