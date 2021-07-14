import { NgModule } from '@angular/core';
import { TcUserProfileConnectorModule } from './connectors/tc-user-profile-connector.module';
import { TcUserProfileStoreModule } from './store/tc-user-profile-store.module';
import { facadeProviders } from './facade';

@NgModule({
  imports: [TcUserProfileStoreModule, TcUserProfileConnectorModule],
  providers: [...facadeProviders],
})
export class TcUserProfileCoreModule {}
