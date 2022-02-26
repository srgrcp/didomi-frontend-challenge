import { createAction, props } from "@ngrx/store";
import { UserConsent } from "projects/consent-manager/src/app/core/models/consent";
import { Pagination } from "projects/consent-manager/src/app/core/models/paginated";

/**
 * Performs a user consents page request.
 * @param page The page to request.
 * @param perPage The number of items per page.
 */
export const getUserConsents = createAction(
  "[UserConsents] Get User Consents",
  props<{ page: number, perPage: number }>()
);

/**
 * When the user consents page request is successful,
 * we dispatch this action to update the user consents state.
 * @param userConsents The user consents.
 * @param pagination The pagination information.
 */
export const getUserConsentsSuccess = createAction(
  "[UserConsents] Get User Consents Success",
  props<{ userConsents: UserConsent[], pagination: Pagination }>()
);

/**
 * When the user consents page request fails,
 * we dispatch this action to update the user consents state.
 * @param error The error.
 */
export const getUserConsentsFailure = createAction(
  "[UserConsents] Get User Consents Failure",
  props<{ error: any }>()
);

/**
 * Performs a user consent save request.
 * @param userConsent The user consent to save.
 */
export const saveUserConsents = createAction(
  "[UserConsents] Save User Consents",
  props<{ userConsents: UserConsent }>()
);

/**
 * When the user consent save request is successful,
 * we dispatch this action to update the user consents state.
 */
export const saveUserConsentsSuccess = createAction(
  "[UserConsents] Save User Consents Success"
);

/**
 * When the user consent save request fails,
 * we dispatch this action to update the user consents state.
 */
export const saveUserConsentsFailure = createAction(
  "[UserConsents] Save User Consents Failure",
  props<{ error: any }>()
);
