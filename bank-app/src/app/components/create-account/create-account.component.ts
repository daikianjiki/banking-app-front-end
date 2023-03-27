import { Component } from '@angular/core';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  accounts : Account[] = [];
  account: Account = {
    accountId: 0,
    accountType: '',
    balance: 0
  }

  constructor(private accountService : AccountService) {

  }

  createAccount() : void {
    this.accountService.postAccount(this.account).subscribe(json => {this.account = json; console.log(this.account)})
  }

}
