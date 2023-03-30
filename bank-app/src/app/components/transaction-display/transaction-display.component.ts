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
  
  allTransaction : Transaction[] = [];

  constructor(public transactionService : TransactionService) { }
  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.transactionService.getTransactionsAPI().subscribe(json=> this.allTransaction=json)
  }

  


}
