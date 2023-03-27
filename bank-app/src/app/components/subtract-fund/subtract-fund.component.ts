import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

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

constructor(private transactionService : TransactionService, private router : Router) { }

goToOtherRoute() {
  this.router.navigate(['/account'])
}

postWithdraw(): void {

    const currentDate = new Date();
    this.transaction.timestamp = currentDate.getTime();

    this.transaction.description = "Withdrawal Amount: " + this.transaction.amount;
    this.transaction.transactionType = "Withdraw"

    this.transactionService.postTransactionsAPI(this.transaction).subscribe(json => {this.transaction = json;

      console.log(this.transaction)});

  }

}
