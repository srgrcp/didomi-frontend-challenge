import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ConsentService } from "projects/consent-manager/src/app/core/services/consent.service";
import { catchError, map, of, switchMap } from "rxjs";
import { getConsentOptions, getConsentOptionsFailure, getConsentOptionsSuccess } from "./consent-options.actions";

@Injectable()
export class ConsentOptionsEffects {

  constructor(
    private actions$: Actions,
    private consentService: ConsentService,
  ) {}

  /**
   * When the consent options request is dispatched,
   * we dispatch this action to get the consent options
   * from the consent service and update the consent options state.
   */
  getConsentOptions$ = createEffect(() => this.actions$.pipe(
    ofType(getConsentOptions),
    switchMap(() => this.consentService.getConsentOptions().pipe(
      map(response => getConsentOptionsSuccess({ consentOptions: response.data })),
      catchError(error => of(getConsentOptionsFailure({ error })))
    )),
  ));

}
