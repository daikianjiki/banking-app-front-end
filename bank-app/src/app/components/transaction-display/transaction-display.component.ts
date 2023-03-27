import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/model/transaction';
import { AccountService } from 'src/app/services/account.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-display',
  templateUrl: './transaction-display.component.html',
  styleUrls: ['./transaction-display.component.css']
})


export class TransactionDisplayComponent implements OnInit{
  
  allTransaction : Transaction[] = [{
    transactionId: 1,
    amount: 100,
    timestamp: 1679860754718,
    description: 'Deposited Amount: 100',
    transactionType: 'Deposit',
    balance: 0
}];

  constructor(private transactionService : TransactionService) { }
  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.transactionService.getTransactionsAPI().subscribe(json=> this.allTransaction=json)
  }

  


}
