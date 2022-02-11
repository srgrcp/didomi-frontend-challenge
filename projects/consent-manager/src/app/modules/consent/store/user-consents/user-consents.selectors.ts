import { createSelector } from "@ngrx/store";
import { ConsentState } from "../consent.state";
import { UserConsentsState } from "./user-consents.reducer";

export const selectUserConsents = (consentState: ConsentState) => consentState.consent.userConsents;

export const selectAllUserConsents = createSelector(
  selectUserConsents,
  (userConsentsState: UserConsentsState) => userConsentsState.userConsents
);
export const selectUserConsentsStatus = createSelector(
  selectUserConsents,
  (userConsentsState: UserConsentsState) => userConsentsState.status
);
export const selectUserConsentsError = createSelector(
  selectUserConsents,
  (userConsentsState: UserConsentsState) => userConsentsState.error
);
export const selectUserConsentsPagination = createSelector(
  selectUserConsents,
  (userConsentsState: UserConsentsState) => userConsentsState.pagination
);
