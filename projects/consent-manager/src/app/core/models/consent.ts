import { User } from "./user";

export interface UserConsent {
    id?: string;
    user: User;
    givenConsents: ConsentOption[];
    givenConsentsText?: string;
}

export interface ConsentOption {
    id: string | undefined;
    description: string;
}
