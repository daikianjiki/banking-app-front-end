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

  accounts : Account[] = [];

  //create account
  postAccount(account:Account) : Observable<Account> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<Account>(`http://127.0.0.1:9000/account`, account, {headers:header});
  }

  getAllAccounts() : Observable<Account[]> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get<Account[]>(`http://127.0.0.1:9000/account`, { headers: header });
  }
}
