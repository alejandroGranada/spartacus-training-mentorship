import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../../model';
import { TcUserProfileAdapter } from './tc-user-profile.adapter';

@Injectable()
export class TcUserProfileConnector {
  constructor(private adapter: TcUserProfileAdapter) {}

  public getUserProfile(userId: string): Observable<UserProfile> {
    return this.adapter.getUserProfile(userId);
  }
}
