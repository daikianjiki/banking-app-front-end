import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user?: User;
  loggedIn : boolean = false;

  setAccount(user: User) {
    this.user = user;
    this.loggedIn = true;
  }

  constructor(private httpClient: HttpClient) { }

    //post a user. This will allow a user to login.
    postUser(user: User) : Observable<User> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      return this.httpClient.post<User>(`http://127.0.0.1:9000/user`, user, { headers: header });
    }
    //user will need to update their personal information as necessary.
    patchUser(user: User, id: number) : Observable<User> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("aacept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      return this.httpClient.patch<User>(`http://127.0.0.1:9000/user/${id}`, user, { headers: header });
    }
    // user will need to be able to see their own personal information on the user page.
    getUser(id: number) : Observable<User> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      return this.httpClient.get<User>(`http://127.0.0.1:9000/user/${id}`, { headers: header })
    }
}
