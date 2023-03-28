import { Component } from '@angular/core';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/services/account.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.css']
})
export class TransferFundComponent {

  constructor(public accountService : AccountService, private transactionService : TransactionService) {}

  accounts : Account[] = this.accountService.accounts;
  account: Account = {};
  accountValue = this.account.accountId;
  amount : number = 0;

  transfer() : void {
 
  }
  

}
