import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  //inputAmount: Number = 0;
  buttonClickMessage = "";

  thanksMessage() {
    this.buttonClickMessage = "Thanks for your withdrawal!"
  }

constructor(
      public transactionService : TransactionService,
      private router : Router,
      private userService : UserService,
      private accountService : AccountService
   ) { }

/**
goToOtherRoute() {
  this.router.navigate(['/account'])
}
**/

postWithdraw(): void {

    const currentDate = new Date();
    let transaction : Transaction  = {transactionType: "Withdraw", amount: this.transaction.amount};

    transaction.timestamp = currentDate.getTime();

    transaction.description = "Withdrawal Amount: " + this.transaction.amount;
    transaction.transactionType = "Withdraw"
    transaction.moneyAccount = {accountId: this.accountService.accounts[0].accountId};

    this.transactionService.withdraw(transaction);
  }

}
