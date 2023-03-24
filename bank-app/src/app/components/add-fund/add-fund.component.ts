import { Component } from '@angular/core';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent {



  transaction : Transaction  = {
    id: 0,
    timestamp: 0,
    description: '',
    transactionType: '',
    amount: 0,
    balance: 0
  }

  inputAmount: Number = 0;
  buttonClickMessage = "";

  thanksMessage() {
    this.buttonClickMessage = "Thanks for your deposit!";
  }



  constructor(private transactionService : TransactionService) { }

  postDeposit(): void {

    const currentDate = new Date();
    this.transaction.timestamp = currentDate.getTime();

    this.transaction.description = "Deposited Amount: " + this.transaction.amount;
    this.transaction.transactionType = "Deposit"

    this.transactionService.postTransactionsAPI(this.transaction).subscribe(json => {this.transaction = json;

      console.log(this.transaction)});

    // this.inputAmount = this.transaction.amount;
  }

}
