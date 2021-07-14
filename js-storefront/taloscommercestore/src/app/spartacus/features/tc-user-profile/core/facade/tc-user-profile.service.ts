import { Injectable } from '@angular/core';
import { TcUserProfileFacade } from '../../root';
import { iif, Observable } from 'rxjs';
import { UserProfile } from '../model';
import { StateWithUserProfile, TcUserProfileActions, TcUserProfileSelectors } from '../store';
import { select, Store } from '@ngrx/store';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { UserIdService } from '@spartacus/core';

@Injectable()
export class TcUserProfileService implements TcUserProfileFacade {
  constructor(protected store: Store<StateWithUserProfile>, protected userIdService: UserIdService) {}

  getUserProfile(loadIfMissing = true): Observable<UserProfile> {
    return iif(
      () => loadIfMissing,
      this.store.pipe(
        select(TcUserProfileSelectors.getUserProfileValue),
        withLatestFrom(this.getUserProfileResLoading(), this.getUserProfileResSuccess()),
        filter(([, loading]) => !loading),
        tap(([userProfile, , success]) => {
          if (!userProfile) {
            if (!success) {
              this.loadUserProfile();
            }
          }
        }),
        filter(([userProfile]) => Boolean(userProfile)),
        map(([userProfile]) => userProfile)
      ),
      this.store.pipe(select(TcUserProfileSelectors.getUserProfileValue))
    );
  }

  loadUserProfile(): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.store.dispatch(new TcUserProfileActions.LoadUserProfile(userId)),
      () => {}
    );
  }

  getUserProfileResLoading(): Observable<boolean> {
    return this.store.pipe(select(TcUserProfileSelectors.getUserProfileLoading));
  }

  getUserProfileResSuccess(): Observable<boolean> {
    return this.store.pipe(select(TcUserProfileSelectors.getUserProfileSuccess));
  }

  getUserProfileResError(): Observable<boolean> {
    return this.store.pipe(select(TcUserProfileSelectors.getUserProfileError));
  }
}
