import { NgModule } from '@angular/core';
import { TcUserProfileCoreModule } from './core';
import { TcUserProfileOccModule } from './occ';
import { TcUserProfileComponentsModule } from './components';

@NgModule({
  declarations: [],
  imports: [TcUserProfileCoreModule, TcUserProfileOccModule, TcUserProfileComponentsModule],
})
export class TcUserProfileModule {}
