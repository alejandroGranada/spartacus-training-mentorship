import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthActions, normalizeHttpError } from '@spartacus/core';
import { TcUserProfileActions } from '../actions';
import { TcUserProfileConnector } from '../../connectors';

@Injectable()
export class TcUserProfileEffects {
  @Effect()
  loadUserProfile$: Observable<TcUserProfileActions.TcUserProfileAction> = this.actions$.pipe(
    ofType(TcUserProfileActions.LOAD_USER_PROFILE),
    map((action: any) => action.payload),
    switchMap((userId) => {
      return this.tcUserProfileConnector.getUserProfile(userId).pipe(
        map((userProfile) => {
          return new TcUserProfileActions.LoadUserProfileSuccess(userProfile);
        }),
        catchError((error) => of(new TcUserProfileActions.LoadUserProfileFail(normalizeHttpError(error))))
      );
    })
  );

  @Effect()
  clearRegistrationDataOnLogin$: Observable<TcUserProfileActions.ClearUserProfile> = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    map(() => new TcUserProfileActions.ClearUserProfile())
  );

  constructor(private actions$: Actions, protected tcUserProfileConnector: TcUserProfileConnector) {}
}
