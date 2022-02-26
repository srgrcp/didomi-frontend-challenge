import { createSelector } from "@ngrx/store";
import { ConsentState } from "../consent.state";
import { ConsentOptionsState } from "./consent-options.reducer";

const selectConsentOptions = (consentState: ConsentState) => consentState.consent.consentOptions;

/**
 * Select the consent options list.
 */
export const selectAllConsentOptions = createSelector(
  selectConsentOptions,
  (consentOptionsState: ConsentOptionsState) => consentOptionsState.consentOptions
);

/**
 * Select the consent options status.
 */
export const selectConsentOptionsStatus = createSelector(
  selectConsentOptions,
  (consentOptionsState: ConsentOptionsState) => consentOptionsState.status
);

/**
 * Select the consent options error.
 */
export const selectConsentOptionsError = createSelector(
  selectConsentOptions,
  (consentOptionsState: ConsentOptionsState) => consentOptionsState.error
);
