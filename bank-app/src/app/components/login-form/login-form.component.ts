import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private loginService : LoginServiceService, private userService : UserService, private routerServeice : Router) {
  }

  username: string = "";
  password: string = "";

  @Input()
  showHeader:   boolean = true;

  login() {
    //create a function where if username and password matches the username and password stored, access log in.
    //and when a user click this button, and if it's granted, lead the user to the account page.
    let user : User = {username : this.username, password: this.password};
    this.loginService.setUser(user);

    let loginResponse : Observable<User> = this.loginService.postLoginRequest();

    loginResponse.subscribe(json => {
      if (json.username == null){ 
        console.log(json);
        throw new Error("login(): Invalid credentials");
      } else {
        this.userService.user = json;
        this.userService.loggedIn = true;
        this.routerServeice.navigate(["/user"]);
      }
    });
  }
}

