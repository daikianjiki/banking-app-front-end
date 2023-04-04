import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import { Transaction } from '../model/transaction';
import { User } from '../model/user';
import { AccountService } from './account.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  constructor(
    private httpClient: HttpClient,
    private accountService : AccountService,
    private userService : UserService
    ) { }
    
    transactions : Transaction[] = [];
    lastWithdraw : number | undefined;
    lastDeposit  : number | undefined;

    //get all transaction on a list to see it on display for each account
    getTransactionsAPI() : Observable<Transaction[]> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      return this.httpClient.get<Transaction[]>(`http://127.0.0.1:9000/Transaction`, { headers: header });

      // return this.httpClient.get<Transaction[]>(`http://127.0.0.1:9000/accounts/${id}/Transaction`, { headers: header });
    }

    /**
     * Get all transactions owned by a user.
     * 
     * Must provide a user object that has a userId set
     * @param user 
     */
    private getTransactionsForUser(user : Pick<User, "userId">) {
      let userId = user.userId;
      let header: HttpHeaders = new HttpHeaders();

      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      header.append("userId", String(userId));

      return this.httpClient.get<Transaction[]>(`http://127.0.0.1:9000/Transaction`, { headers: header });
    }

    //post a transaction
    private postTransactionsAPI(transaction: Transaction) : Observable<Transaction> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      return this.httpClient.post<Transaction>(`http://127.0.0.1:9000/Transaction`, transaction, { headers: header });
    }
      //post a transaction
    private postDeposit(transaction: Transaction) : Observable<Transaction> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      return this.httpClient.post<Transaction>(`http://127.0.0.1:9000/Transaction/deposit`, transaction, { headers: header });
    }
    //post a transaction
    private postWithdraw(transaction: Transaction) : Observable<Transaction> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      return this.httpClient.post<Transaction>(`http://127.0.0.1:9000/Transaction/withdraw`, transaction, { headers: header });
    }

    /**
     * This method is used to post new deposits. It accepts a transaction object as input.
     * 
     * Example input
     * 
     * transction = {
     *    amount: 50,
     *    description: "Test deposit",
     *    moneyAccount: {accountId: 1},  
     *    transactionType: "Deposit"
     * }
     * 
     * If these fields are missing the deposit may fail.
     * 
     * @param transaction - a valid transaction value
     * @returns The remaining balance after the deposit operation
     */
    public deposit(transaction: Transaction) : void {

      // use the private postDeposit method to handle all the dirty work
      this.postDeposit(transaction).subscribe(json => {
        let account: Account | undefined = transaction.moneyAccount;

        transaction = json;
        
        if (account != undefined){
          transaction.moneyAccount = account;
        }

        this.transactions.unshift(transaction);

        // this is used to sync the account service
        // TODO: hide these details in the AccountService class
        this.accountService.getUserAccounts(this.userService.getUser, (userService) => {
          console.log(userService?.accounts)
        });

        console.log(transaction)

        if (transaction.settledBalance == undefined){
          throw new Error("deposit(): transaction failed - settled balance is undefined");
        }

        // instead of returning append to a list of transactions inside the subscribe "transasctionsByUserId"
      });

      // Here we check if the backend has place the new balance into this transaction.
      // (Major error if it hasn't - problem with backend)


      // return the new balance transaction
    }

    public withdraw(transaction: Transaction) : Transaction {

      this.postWithdraw(transaction).subscribe(json => {
        transaction = json;
        this.transactions.unshift(transaction);

        this.accountService.getUserAccounts(this.userService.getUser);

        // Here we check if the backend has place the new balance into this transaction.
        // (Major error if it hasn't - problem with backend)
        if (transaction.settledBalance == undefined){
          throw new Error("withdrawal(): transaction failed - settled balance is undefined");
        }
      });
      return transaction;
    }

    emptyTransactionArray(): void{
      this.transactions = [];
    }
    public refreshTransactionArray(user : Pick<User, "userId">, callback? : Function){
      this.getTransactionsForUser(user).subscribe(json => {
        console.log("TransactionService.refreshTransctionArray()");

        this.accountService.getUserAccounts(this.userService.getUser, () => {
          //console.log(json);

          // get an array of transaction arrays
          let transArr : (Transaction[] | undefined)[] = this.accountService.accounts
            // filter out undefined data
            .filter(account => account != undefined )
            .filter(account => account.transactions != undefined)
            
            // associate each transaction with the proper MoneyAccount
            .map(account => {
              account.transactions?.forEach(transaction => {
                transaction.moneyAccount = account
              });
              return account;
            })
            // return an array of transaction arrays
            .map(account => account.transactions)

          // reduce nested array to a single array
          if (transArr !== undefined){
            let trans : Transaction[] = transArr
              .reduce( (prev, curr) => {
                if( prev == undefined && curr === undefined) {
                  return [];
                } else if ( curr === undefined ){
                  return prev;
                }
                
                return prev?.concat(curr)
                
              }, [])!
              .sort((a, b) => b.transactionId! - a.transactionId! );

              this.transactions = trans;
              //console.log(trans);
              callback && callback();
          }
        });
      })
    }

}
