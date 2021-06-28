import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { OccTcReferredCustomerAdapter } from './adapters';
import { tcOccReferredCustomerConfig } from './config';
import { TcReferredCustomerNormalizer } from './converters';
import { TcReferredCustomerAdapter } from '../core/connectors';
import { REFERRED_CUSTOMER_NORMALIZER } from '../core/connectors/tc-referred-customer/converters';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideConfig(tcOccReferredCustomerConfig),
    { provide: TcReferredCustomerAdapter, useClass: OccTcReferredCustomerAdapter },
    { provide: REFERRED_CUSTOMER_NORMALIZER, useExisting: TcReferredCustomerNormalizer, multi: true },
  ],
})
export class TcReferredCustomerOccModule {}
