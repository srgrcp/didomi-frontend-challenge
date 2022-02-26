import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ConsentService } from "projects/consent-manager/src/app/core/services/consent.service";
import { catchError, map, of, switchMap } from "rxjs";
import { getUserConsents, getUserConsentsFailure, getUserConsentsSuccess, saveUserConsents, saveUserConsentsFailure, saveUserConsentsSuccess } from "./user-consents.actions";

@Injectable()
export class UserConsentEffects {

  constructor(
    private actions$: Actions,
    private consentService: ConsentService,
  ) {}

  /**
   * When the user consents page request is dispatched,
   * we dispatch this action to get the user consents
   * from the consent service and update the user consents state.
   */
  getUserConsents$ = createEffect(() => this.actions$.pipe(
    ofType(getUserConsents),
    switchMap(({ page, perPage }) => this.consentService.getUserConsents(page, perPage).pipe(
      map(response => getUserConsentsSuccess({ userConsents: response.data.data, pagination: response.data.pagination })),
      catchError(error => of(getUserConsentsFailure({ error })))
    )),
  ));

  /**
   * When the user consent save request is dispatched,
   * we dispatch this action to save the user consent
   * to the consent service and update the user consents state.
   */
  saveUserConsents$ = createEffect(() => this.actions$.pipe(
    ofType(saveUserConsents),
    switchMap(({ userConsents }) => this.consentService.saveUserConsents(userConsents).pipe(
      map(() => saveUserConsentsSuccess()),
      catchError(error => of(saveUserConsentsFailure({ error })))
    )),
  ));

}
