import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  selectedMenuItem : string = "home";

  constructor() { }

  setSelected(newSelection : string){
    this.selectedMenuItem = newSelection;
  }
}
