import { createSelector } from "@ngrx/store";
import { ConsentState } from "../consent.state";
import { UserConsentsState } from "./user-consents.reducer";

const selectUserConsents = (consentState: ConsentState) => consentState.consent.userConsents;

/**
 * Select the user consents list.
 */
export const selectAllUserConsents = createSelector(
  selectUserConsents,
  (userConsentsState: UserConsentsState) => userConsentsState.userConsents
);

/**
 * Select the user consents status.
 */
export const selectUserConsentsStatus = createSelector(
  selectUserConsents,
  (userConsentsState: UserConsentsState) => userConsentsState.status
);

/**
 * Select the user consents error.
 */
export const selectUserConsentsError = createSelector(
  selectUserConsents,
  (userConsentsState: UserConsentsState) => userConsentsState.error
);

/**
 * Select the user consents pagination.
 */
export const selectUserConsentsPagination = createSelector(
  selectUserConsents,
  (userConsentsState: UserConsentsState) => userConsentsState.pagination
);
