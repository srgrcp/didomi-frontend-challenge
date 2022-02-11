import { createSelector } from "@ngrx/store";
import { ConsentState } from "../consent.state";
import { ConsentOptionsState } from "./consent-options.reducer";

export const selectConsentOptions = (consentState: ConsentState) => consentState.consent.consentOptions;

export const selectAllConsentOptions = createSelector(
  selectConsentOptions,
  (consentOptionsState: ConsentOptionsState) => consentOptionsState.consentOptions
);
export const selectConsentOptionsStatus = createSelector(
  selectConsentOptions,
  (consentOptionsState: ConsentOptionsState) => consentOptionsState.status
);
export const selectConsentOptionsError = createSelector(
  selectConsentOptions,
  (consentOptionsState: ConsentOptionsState) => consentOptionsState.error
);
