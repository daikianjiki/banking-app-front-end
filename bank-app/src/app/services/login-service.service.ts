import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AccountService } from './account.service';
import { NavbarService } from './navbar.service';
import { TransactionService } from './transaction.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  user: User = {};

  constructor(private httpClient : HttpClient, 
              private userService : UserService, 
              private routerService : Router,
              private navbarService : NavbarService,
              private accountService : AccountService,
              private transactionService : TransactionService) {            
  }

  setUser(user: User){
    this.user = user;
  }

  setUsername(username : string){
    this.user.username = username;
  }
  
  setPassword(password : string){
    this.user.password = password;
  }
  
  setEmail(email : string){
    this.user.email = email;
  }

  verifyCredentials(user: User) : boolean {
    if (user.username == undefined) return false;
    if (user.password == undefined) return false;
    //if (this.user.email == undefined) return false;

    return true;
  }

  postLoginRequest(user : User) : Observable<User> {
    if (this.verifyCredentials(user) == false){
      throw new Error("Invalid credentials");
    }

    let headers: HttpHeaders = new HttpHeaders();
    headers.append("accept", "text/json");
    headers.append("Access-Control-Allow-Origin", "*");

    let response = this.httpClient.post<User>(`http://3.101.140.91:9000/login`, user, {headers:headers});
    return response;
  }

  logout() : void {
    this.userService.loggedIn = false;
    this.routerService.navigate(["/home"]);
    this.navbarService.setSelected("home");
    this.accountService.emptyAccountsArray();
    this.transactionService.emptyTransactionArray();
  }

  login(user : User, callback? : (loginService?:LoginServiceService)=>{}) : void {
    
    //create a function where if username and password matches the username and password stored, access log in.
    //and when a user click this button, and if it's granted, lead the user to the account page.
    //let user : User = {username : this.username, password: this.password};

    console.log(user);
    let loginResponse : Observable<User> = this.postLoginRequest(user);

    loginResponse.subscribe(json => {
      if (json.username == null){ 
        console.log(json);
        throw new Error("login(): Invalid credentials");
      } else {
        this.setUser(user);
        this.userService.user = json;
        this.userService.loggedIn = true;

        this.accountService.getUserAccounts(this.userService.getUser, () => {
          console.log("LoginService.login()");
        })

        this.transactionService.refreshTransactionArray(this.userService.user);

        this.routerService.navigate(["/user"]);
        this.navbarService.setSelected("user");

        // run callback function if provided
        if (callback != undefined) callback(this);

      }
    });
  }
}
