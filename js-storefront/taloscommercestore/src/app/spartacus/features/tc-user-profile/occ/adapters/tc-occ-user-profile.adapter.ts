import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterService, normalizeHttpError, OccEndpointsService } from '@spartacus/core';
import { Observable, throwError } from 'rxjs';
import { OccUserProfileList } from '../model';
import { USER_PROFILE_NORMALIZER, UserProfile, TcUserProfileAdapter } from '../../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class OccTcUserProfileAdapter implements TcUserProfileAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {}

  getUserProfile(userId: string): Observable<UserProfile> {
    const url = this.getEndpoint('users', userId);

    return this.http.get<OccUserProfileList>(url).pipe(
      catchError((error) => throwError(normalizeHttpError(error))),
      this.converter.pipeable(USER_PROFILE_NORMALIZER)
    );
  }

  private getEndpoint(endpoint: string, userId: string): string {
    return this.occEndpoints.getUrl(endpoint, { userId });
  }
}
