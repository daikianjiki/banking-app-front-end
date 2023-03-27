import { Component, Input } from '@angular/core';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent {

  accounts : Account[] = [];

  constructor(public accountService : AccountService) { }
  // ngOnInit(): void {
  //   this.refresh();
  // }
  // refresh() {
  //   this.accountService.getAllAccounts().subscribe(json=> {this.accounts = json})
  // }

}
