import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent implements OnInit {

  inputAmount: Number = 0;
  buttonClickMessage = "";

  depositAmount() {
    this.buttonClickMessage = "Thanks for your deposit!";
  }


  constructor() { }

  ngOnInit(): void {
    
  }

}
