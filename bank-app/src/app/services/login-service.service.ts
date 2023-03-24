import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  user: User = {};

  constructor(private httpClient : HttpClient, private userService : UserService, private routerService : Router) {            
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

  verifyCredentials() : boolean {
    if (this.user.username == undefined) return false;
    if (this.user.password == undefined) return false;
    //if (this.user.email == undefined) return false;

    return true;
  }

  postLoginRequest() : Observable<User> {
    if (this.verifyCredentials() == false){
      throw new Error("Invalid credentials");
    }

    let headers: HttpHeaders = new HttpHeaders();
    headers.append("accept", "text/json");
    headers.append("Access-Control-Allow-Origin", "*");

    let response = this.httpClient.post<User>(`http://127.0.0.1:9000/login`, this.user, {headers:headers});
    return response;
  }

  doLogin(username : string, password : string) : User {
    this.setUsername(username);
    this.setPassword(password);

    let response = this.postLoginRequest();

    let json;
    response.subscribe(returnedJson => {

      if (returnedJson != undefined && returnedJson.userId != undefined){
        // update login status
        json = returnedJson;
        this.userService.setAccount(json as User);
        this.routerService.navigate(["/user"]);
      }
    });

    if (json == undefined){
      throw new Error("Login failed!");
    }
    // redundant cast but clarifies what is happening
    return json as User;
  }
}
