import { createReducer, on } from "@ngrx/store";
import { ConsentOption } from "projects/consent-manager/src/app/core/models/consent";
import { getConsentOptions, getConsentOptionsFailure, getConsentOptionsSuccess } from "./consent-options.actions";

export interface ConsentOptionsState {
  consentOptions: ConsentOption[];
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
}

export const initialState: ConsentOptionsState = {
  consentOptions: [],
  status: 'idle',
  error: null,
};

export const consentOptionsReducer = createReducer(
  initialState,
  on(getConsentOptions, state => ({
    ...state,
    status: 'loading',
    error: null,
  })),
  on(getConsentOptionsSuccess, (state, { consentOptions }) => ({
    ...state,
    consentOptions,
    status: 'success',
    error: null,
  })),
  on(getConsentOptionsFailure, (state, { error }) => ({
    ...state,
    consentOptions: [],
    status: 'error',
    error,
  })),
)
