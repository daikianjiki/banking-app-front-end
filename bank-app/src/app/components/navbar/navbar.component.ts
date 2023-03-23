import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
setSelected(arg0: string) {
  this.selected = arg0;
}
selected: String = "";

  constructor() { }

  ngOnInit(): void {
    this.selected = "home"
  }

}
