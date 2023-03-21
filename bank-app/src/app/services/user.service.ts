import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

    //post a user. This will allow a user to login.
    postUser(user: User) : Observable<User> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      return this.httpClient.post<User>(`localhost:9000/user`, user, { headers: header });
    }
  
}
