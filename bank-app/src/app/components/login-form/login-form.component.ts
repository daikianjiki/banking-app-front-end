import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/services/account.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private accountService : AccountService,
    private loginService : LoginServiceService, 
    private userService : UserService, 
    private routerServeice : Router,
    private navbarService : NavbarService) {
  }

  username: string = "";
  password: string = "";

  @Input()
  showHeader:   boolean = true;

  login() {
    let user : User = {username: this.username, password: this.password};
    this.loginService.login(user);
  }
}

