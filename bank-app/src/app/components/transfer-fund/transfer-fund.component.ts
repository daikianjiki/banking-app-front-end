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
export class TransferFundComponent{

  constructor(public accountService : AccountService, private transactionService : TransactionService) {}

  accounts : Account[] = this.accountService.accounts;
  account: Account = {};
  amount : number = 0;
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

  transfer() : void {
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

  }

  setFrom(e : Account) : void {
    this.from = e;
  }
  setTo(e : Account) : void {
    this.to = e;
  }

  test() {
    let elem = document.getElementsByName("to");
    let elem2 = document.getElementsByName("from");
    console.log(elem);
    console.log(elem2);
    console.log("test");
  }
  

}
