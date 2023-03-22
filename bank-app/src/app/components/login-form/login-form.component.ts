import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  username: string = "";
  password: string = "";

  @Input()
  showHeader:   boolean = true;

  login() {
    //create a function where if username and password matches the username and password stored, access log in.
    //and when a user click this button, and if it's granted, lead the user to the account page.
    

  }

}
