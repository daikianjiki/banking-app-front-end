import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

    //get all transaction on a list to see it on display for each account
    getTransactionsAPI(id : number) : Observable<Transaction[]> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      return this.httpClient.get<Transaction[]>(`http://127.0.0.1:9000/accounts/${id}/Transaction`, { headers: header });
    }
    //post a transaction
    postTransactionsAPI(transaction: Transaction) : Observable<Transaction> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      return this.httpClient.post<Transaction>(`http://127.0.0.1:9000/Transaction`, transaction, { headers: header });
    }
}
