import { createAction, props } from "@ngrx/store";
import { ConsentOption } from "projects/consent-manager/src/app/core/models/consent";

export const getConsentOptions = createAction(
  '[ConsentOptions] Get Consent Options'
);

export const getConsentOptionsSuccess = createAction(
  '[ConsentOptions] Get Consent Options Success',
  props<{ consentOptions: ConsentOption[] }>()
);

export const getConsentOptionsFailure = createAction(
  '[ConsentOptions] Get Consent Options Failure',
  props<{ error: any }>()
);
