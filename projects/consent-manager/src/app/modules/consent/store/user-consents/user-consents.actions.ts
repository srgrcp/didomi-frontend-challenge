import { createAction, props } from "@ngrx/store";
import { UserConsent } from "projects/consent-manager/src/app/core/models/consent";
import { Pagination } from "projects/consent-manager/src/app/core/models/paginated";

export const getUserConsents = createAction(
  "[UserConsents] Get User Consents",
  props<{ page: number, perPage: number }>()
);

export const getUserConsentsSuccess = createAction(
  "[UserConsents] Get User Consents Success",
  props<{ userConsents: UserConsent[], pagination: Pagination }>()
);

export const getUserConsentsFailure = createAction(
  "[UserConsents] Get User Consents Failure",
  props<{ error: any }>()
);

export const saveUserConsents = createAction(
  "[UserConsents] Save User Consents",
  props<{ userConsents: UserConsent }>()
);

export const saveUserConsentsSuccess = createAction(
  "[UserConsents] Save User Consents Success"
);

export const saveUserConsentsFailure = createAction(
  "[UserConsents] Save User Consents Failure",
  props<{ error: any }>()
);
