import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import { User } from '../model/user';
import { UserService } from './user.service';

type AccountServiceCallback = (accountService?: AccountService) => void;


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient, private userService : UserService) { }

  accounts : Account[] = [];


  //create account
  postAccount(account:Account) : Observable<Account> {
    account.user = this.userService.user;
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
<<<<<<< HEAD
    return this.httpClient.post<Account>(`http://54.153.80.103:9000/account`, account, {headers:header});
=======
    return this.httpClient.post<Account>(`http://18.221.74.110:9000/account`, account, {headers:header});
>>>>>>> 1691db644b4766e7706fa228b687f3157770d51f
  }
  
  getAllAccounts() : Observable<Account[]> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
<<<<<<< HEAD
    return this.httpClient.get<Account[]>(`http://54.153.80.103:9000/account`, { headers: header });
=======
    return this.httpClient.get<Account[]>(`http://18.221.74.110:9000/account`, { headers: header });
>>>>>>> 1691db644b4766e7706fa228b687f3157770d51f
  }

  private getAccountForUser(user : User) : Observable<Account[]> {

    if(user.userId == null || user.userId == undefined) {
      throw new Error("getAccountForUser(): missing user ID");
    }

    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
<<<<<<< HEAD
    return this.httpClient.get<Account[]>(`http://54.153.80.103:9000/account/user/${user.userId}`, { headers: header });
=======
    return this.httpClient.get<Account[]>(`http://18.221.74.110:9000/account/user/${user.userId}`, { headers: header });
>>>>>>> 1691db644b4766e7706fa228b687f3157770d51f
  }

  public getUserAccounts(user: User, callback? : AccountServiceCallback){
    this.getAccountForUser(user).subscribe(json => {
      this.accounts = json;

      if ( callback !== undefined ) {
        callback(this);
      }

    })
  }

  emptyAccountsArray(): void {
    this.accounts = [];
  }

}
