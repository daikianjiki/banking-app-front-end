export interface Transaction {
    transactionId: number,
    timestamp: number, //date of the transaction i.e 'March 20, 2023' -- is there Data datatype?
    description: string, //description of the transaction i.e 'Transfer to Savings Account'
    transactionType: string, //type of the transaction i.e withdrawal, deposit etc.
    amount: number, //amount of transaction. i.e. -$100.00 for withdrawal or transfer.
    balance: number //total balance after the transaction. i.e pre-balance: $500.00, transfer $100.00, balance = $400.00
}