import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtract-fund',
  templateUrl: './subtract-fund.component.html',
  styleUrls: ['./subtract-fund.component.css']
})
export class SubtractFundComponent implements OnInit {

  inputAmount: Number = 0;
  buttonClickMessage = "";

  thanksMessage() {
    this.buttonClickMessage = "Thanks for your withdrawl!"
  }

constructor() { }

ngOnInit(): void {

}

}