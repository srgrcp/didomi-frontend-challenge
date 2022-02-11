import { consentOptionsReducer, ConsentOptionsState } from "./consent-options/consent-options.reducer";
import { userConsentsReducer, UserConsentsState } from "./user-consents/user-consents.reducer";

export interface ConsentState {
  consent: {
    consentOptions: ConsentOptionsState;
    userConsents: UserConsentsState;
  }
}

export const consentReducers = {
  consentOptions: consentOptionsReducer,
  userConsents: userConsentsReducer,
};
