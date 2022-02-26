import { createAction, props } from "@ngrx/store";
import { ConsentOption } from "projects/consent-manager/src/app/core/models/consent";

/**
 * Performs a consent options request.
 */
export const getConsentOptions = createAction(
  '[ConsentOptions] Get Consent Options'
);

/**
 * When the consent options request is successful,
 * we dispatch this action to update the consent options state.
 * @param consentOptions The consent options.
 */
export const getConsentOptionsSuccess = createAction(
  '[ConsentOptions] Get Consent Options Success',
  props<{ consentOptions: ConsentOption[] }>()
);

/**
 * When the consent options request fails,
 * we dispatch this action to update the consent options state.
 * @param error The error.
 */
export const getConsentOptionsFailure = createAction(
  '[ConsentOptions] Get Consent Options Failure',
  props<{ error: any }>()
);
