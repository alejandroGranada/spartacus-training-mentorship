import { Provider } from '@angular/core';
import { TcMiscFacade } from '../../root';
import { TcMiscService } from './tc-misc.service';

export const facadeProviders: Provider[] = [
    TcMiscService,
    {
        provide: TcMiscFacade,
        useExisting: TcMiscService
    }
]