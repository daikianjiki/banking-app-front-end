import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/account';
import { Transaction } from 'src/app/model/transaction';
import { AccountService } from 'src/app/services/account.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-subtract-fund',
  templateUrl: './subtract-fund.component.html',
  styleUrls: ['./subtract-fund.component.css']
})
export class SubtractFundComponent {
  @Input()
  transaction : Transaction  = {
    transactionId: 0,
    timestamp: 0,
    description: '',
    transactionType: '',
    amount: 0,
    balance: 0
  }

  from : Account = {}

  //inputAmount: Number = 0;
  buttonClickMessage = "";
showInputBox: any;

constructor(
      public transactionService : TransactionService,
      private router : Router,
      private userService : UserService,
      public accountService : AccountService
   ) { }

postWithdraw(): void {
    if (this.transaction.amount !== undefined 
      && this.from.accountId != undefined
      && this.transaction.amount > 0
      && this.from.balance != undefined
      && this.from.balance > this.transaction.amount
    ){

      const currentDate = new Date();
      let transaction : Transaction  = {transactionType: "Withdraw", amount: this.transaction.amount};
  
      transaction.timestamp = currentDate.getTime();
  
      transaction.description = "Withdrawal Amount: " + this.transaction.amount;
      transaction.transactionType = "Withdraw"
      transaction.moneyAccount = {accountId: this.from.accountId};
  
      this.transactionService.lastWithdraw = this.transaction.amount;
      this.transactionService.withdraw(transaction);
  
      this.thanksMessage();
      this.showInputBox = false;
    }
  }

  setFrom(e : Account) : void {
    this.from = e;
  }

  thanksMessage() {
    this.buttonClickMessage = "Thanks for your withdrawal!"
  }

  onSelect(event : any) {
    const target = event.target as HTMLSelectElement;
    const value = Number.parseInt(target.value);
    if (value > 0) {

      let accountId : number = value;
      this.setFrom(this.accountService.accounts.filter(x => x.accountId === accountId)[0])
      this.showInputBox = true;
    } else {
      this.showInputBox = false;
    }
  }
}
