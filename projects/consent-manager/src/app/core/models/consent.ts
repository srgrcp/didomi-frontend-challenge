import { User } from "./user";

/**
 * A user with its given consents.
 */
export interface UserConsent {
    id?: string;
    user: User;
    givenConsents: ConsentOption[];
    givenConsentsText?: string;
}

/**
 * A consent type.
 */
export interface ConsentOption {
    id: string | undefined;
    description: string;
}
