import { Component } from '@angular/core';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  account: Account = {
    accountId: 0,
    accountType: '',
    balance: 0
  }

  constructor(private accountService : AccountService) {

  }

  createAccount() : void {
    this.accountService.postAccount(this.account).subscribe(json => {this.accountService.accounts.push(json); console.log(this.account)})
  }

}
