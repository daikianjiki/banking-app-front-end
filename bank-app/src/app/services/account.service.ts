import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  //create account
  postAccount(account:Account) : Observable<Account> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<Account>(`localhost:9000`, account, {headers:header});
  }
}
