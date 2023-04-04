import { Component } from '@angular/core';
import { Account } from 'src/app/model/account';
import { Transaction } from 'src/app/model/transaction';
import { AccountService } from 'src/app/services/account.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.css']
})
export class TransferFundComponent {

  constructor(public accountService : AccountService, private transactionService : TransactionService) {}

  transaction : Transaction  = {
    transactionId: 0,
    timestamp: 0,
    description: '',
    transactionType: '',
    amount: 0,
    balance: 0
  }

  from : Account = {}
  to : Account = {}
  show : boolean = false;
  show2 : boolean = false;
  message : string = "Insufficient funds!"
  message2 : string = "Transfer was successful!"
  fromId : number | undefined = this.from.accountId
  toId : number | undefined = this.from.accountId
  disable : number | undefined = 0
  disable2 : number | undefined = 0


  transfer() : void {

// check if the user has selected both the to and from account
    if (this.to.accountId != undefined && this.from.accountId != undefined){


// check account balances
      if (this.from.balance != undefined && this.from.balance < this.transaction.amount) {
        this.show = true;
      } else if (this.transaction.balance == 0) {
// do nothing if the transaction balance is 0
      } else {

// Complete the transfer
        this.show2 = true;
        const currentDate = new Date();
        let deposit : Transaction  = {transactionType: "Deposit", amount: this.transaction.amount};
        let withdraw : Transaction  = {transactionType: "Withdraw", amount: this.transaction.amount};
    
          deposit.timestamp = currentDate.getTime();
          deposit.description = "Deposited Amount: " + this.transaction.amount;
          deposit.transactionType = "Deposit"
          deposit.moneyAccount = {accountId: this.to.accountId};
      
          this.transactionService.deposit(deposit);
          
          withdraw.timestamp = currentDate.getTime();
          withdraw.description = "Withdrawal Amount: " + this.transaction.amount;
          withdraw.transactionType = "Withdraw"
          withdraw.moneyAccount = {accountId: this.from.accountId};
          
          this.transactionService.withdraw(withdraw)
          
          this.disable = 0;
          this.disable2 = 0;
      }
    }
  }

  // functions below will set the selected radio button to the account to dynamically 
  // set the depost to and withdraw from.
  setFrom(e : Account) : void {
    this.from = e;
    this.disable2 = this.from.accountId;

  }
  setTo(e : Account) : void {
    this.to = e;
    this.disable = this.to.accountId;

  }
}
