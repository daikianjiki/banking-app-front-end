import { Transaction } from "./transaction";
import { User } from "./user";

export interface Account {
    accountId?: number, //is this the account number?
    accountType?: string, //checking, savings etc.
    balance?: number, //this will match the balance in transaction
    user?: User,
    transactions?: Transaction[]
}
