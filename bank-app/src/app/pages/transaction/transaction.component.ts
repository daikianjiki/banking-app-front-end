import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Account } from 'src/app/model/account';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  accounts : Account[] = [];


  constructor() { }
  ngOnInit(): void {
    
  }
  active = 'top';

}
