import { createReducer, on } from "@ngrx/store";
import { UserConsent } from "projects/consent-manager/src/app/core/models/consent";
import { Pagination } from "projects/consent-manager/src/app/core/models/paginated";
import { getUserConsents, getUserConsentsFailure, getUserConsentsSuccess, saveUserConsents, saveUserConsentsFailure, saveUserConsentsSuccess } from "./user-consents.actions";

/**
 * Paginated user consents state.
 */
export interface UserConsentsState {
  userConsents: UserConsent[];
  pagination: Pagination | null;
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
}

export const initialState: UserConsentsState = {
  userConsents: [],
  pagination: null,
  status: 'idle',
  error: null,
};

/**
 * Set `userConsent.givenConsentsText` with a formated string with
 * the given consents separated by a comma.
 * @param userConsent The user consent.
 * @returns The user consent with the given consents text.
 */
function generateGivenConsentsText(userConsent: UserConsent): UserConsent {
  return {
    ...userConsent,
    givenConsentsText: userConsent.givenConsents.map(consent => consent.description).join(', '),
  }
}

export const userConsentsReducer = createReducer(
  initialState,
  on(getUserConsents, state => ({
    ...state,
    status: 'loading',
    error: null,
  })),
  on(getUserConsentsSuccess, (state, { userConsents, pagination }) => ({
    ...state,
    // We need to generate the given consents text for each user
    // consent, in order to display it in the table.
    userConsents: userConsents.map(generateGivenConsentsText),
    pagination,
    status: 'success',
    error: null,
  })),
  on(getUserConsentsFailure, (state, { error }) => ({
    ...state,
    userConsents: [],
    pagination: null,
    status: 'error',
    error,
  })),
  on(saveUserConsents, (state, { userConsents }) => ({
    ...state,
    status: 'loading',
    error: null,
  })),
  on(saveUserConsentsSuccess, (state) => ({
    ...state,
    status: 'success',
    error: null,
  })),
  on(saveUserConsentsFailure, (state, { error }) => ({
    ...state,
    status: 'error',
    error,
  })),
);
