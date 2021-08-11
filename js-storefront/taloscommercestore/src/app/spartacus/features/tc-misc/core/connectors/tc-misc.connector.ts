import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentIdentityType } from '../model';
import { TcMiscAdapter } from './tc-misc.adapter';

@Injectable()
export class TcMiscConnector {
    constructor(private tcMiscAdapter: TcMiscAdapter) {}

    /**
     * Query all document types configured
     * @returns array of document types
     */
    getDocumentTypes(): Observable<DocumentIdentityType[]> {
        return this.tcMiscAdapter.loadDocumentTypes();
    }
}
