import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TcMiscFacade } from '../../root';
import { DocumentIdentityType } from '../model';
import { StateWithMisc, TcMiscActions, TcMiscSelectors } from '../store';

@Injectable()
export class TcMiscService implements TcMiscFacade {
    constructor(private store: Store<StateWithMisc>) {}

    /**
     * Returns document types.
     */
    getDocumentTypes(): Observable<DocumentIdentityType[]> {
        return this.store.pipe(
            select(TcMiscSelectors.getAllDocumentTypes),
            tap((documentTypes: DocumentIdentityType[]) => {
              if (Object.keys(documentTypes).length === 0) {
                this.loadDocumentTypes();
              }
            })
          );
    }
    getDocumentTypesMap(documentTypes: DocumentIdentityType[]): Map<string, DocumentIdentityType> {
        return new Map(documentTypes.map((docType) => [docType.code, docType] as [string, DocumentIdentityType]));
    }

    /**
     * Retrieves document types.
     */
    loadDocumentTypes(): void {
        this.store.dispatch(new TcMiscActions.LoadDocumentTypes());
    }

}