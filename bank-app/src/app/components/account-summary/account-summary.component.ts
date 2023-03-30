import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Account } from 'src/app/model/account';
import { Transaction } from 'src/app/model/transaction';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/services/account.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent {
  constructor(
    private accountService : AccountService,
    private userService : UserService,
    private transactionService : TransactionService
  ){
    if(this.userService.user == undefined){
      throw new Error("AccountSummary: User does not exist");
    }
    this.user = this.userService.user;
  }

  user : User;
  balance : number = 0;
  lastTransactions : Transaction[] = [];
  accounts : Account[] = [];

  ngOnInit(){
    this.balance = this.accountService.accounts
      .map((account)=> account.balance != undefined ? account.balance : 0.00)
      .reduce((prevBal, curBal) =>{
        return curBal + prevBal;
      });

      this.lastTransactions = this.transactionService.transactions.slice(0, 10);

    this.accounts = this.accountService.accounts;
    //console.log(this.accounts);
    //console.log(this.accounts[0].transactions);
  }
}
