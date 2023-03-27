export interface Account {
    accountId?: number, //is this the account number?
    type?: string, //checking, savings etc.
    balance?: number, //this will match the balance in transaction
}