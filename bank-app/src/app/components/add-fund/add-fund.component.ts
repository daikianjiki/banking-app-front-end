import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/account';
import { Transaction } from 'src/app/model/transaction';
import { AccountService } from 'src/app/services/account.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})

export class AddFundComponent {
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
  selectAccount: any;

  thanksMessage() {
    this.buttonClickMessage = "Thanks for your deposit!";
  }

  constructor(
    private userService : UserService, 
    public accountService : AccountService, 
    public transactionService : TransactionService, 
    private router : Router
    ) { }

  // goToOtherRoute() {
  //   this.router.navigate(['/account'])
  // }
  to : Account = {}

  postDeposit(): void {

    const currentDate = new Date();
    let transaction : Transaction  = {transactionType: "Deposit", amount: this.transaction.amount};

    transaction.timestamp = currentDate.getTime();
    transaction.description = "Deposited Amount: " + this.transaction.amount;
    transaction.transactionType = "Deposit"
    // transaction.moneyAccount = {accountId: this.to.accountId};
    transaction.moneyAccount = {accountId: this.to.accountId};

    this.transactionService.deposit(transaction);
  }

  setTo(e : Account): void{
    this.to = e;
  }

}
