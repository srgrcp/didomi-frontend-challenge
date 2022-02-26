import { consentOptionsReducer, ConsentOptionsState } from "./consent-options/consent-options.reducer";
import { userConsentsReducer, UserConsentsState } from "./user-consents/user-consents.reducer";

export interface ConsentState {
  consent: {
    consentOptions: ConsentOptionsState;
    userConsents: UserConsentsState;
  }
}

/**
 * The consent state reducer.
 */
export const consentReducers = {
  consentOptions: consentOptionsReducer,
  userConsents: userConsentsReducer,
};
