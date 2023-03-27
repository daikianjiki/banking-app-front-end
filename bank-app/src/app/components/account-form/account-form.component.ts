import { Component, Input } from '@angular/core';
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent {

  @Input()
  account: Account = {
    accountId: 0,
    accountType: '',
    balance: 0
  }

}
