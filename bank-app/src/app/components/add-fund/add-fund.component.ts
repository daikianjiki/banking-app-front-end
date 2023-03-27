import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

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

  thanksMessage() {
    this.buttonClickMessage = "Thanks for your deposit!";
  }

  constructor(private transactionService : TransactionService, private router : Router) { }

  // goToOtherRoute() {
  //   this.router.navigate(['/account'])
  // }

  postDeposit(): void {

    const currentDate = new Date();
    let transaction : Transaction  = {
      transactionId: 0,
      timestamp: 0,
      description: '',
      transactionType: '',
      amount: this.transaction.amount,
      balance: 0
    }

    transaction.timestamp = currentDate.getTime();

    transaction.description = "Deposited Amount: " + this.transaction.amount;
    transaction.transactionType = "Deposit"

    this.transactionService.postTransactionsAPI(transaction).subscribe(json => {
      this.transaction = json;
      console.log(this.transaction)
    });

  }

}
