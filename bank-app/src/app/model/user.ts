import { Account } from "./account";

export interface User {
    userId?: number,
    username?: string, //user will use this to log in.
    password?: string, //user will use this to log in.
    streetAddress1?: string, //user's address - won't need it for anything else
    phoneNumber?: number, //user's phone number - won't need it for anything else. (Maybe two-way authenticator?)
    email?: string, //user's email - we can send an email to the user to verify account creation?
    moneyAccount?: Account[],
}