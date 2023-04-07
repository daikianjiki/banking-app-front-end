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

    // getters and setters
    get getUser() : User {
      if (this.user === undefined) {
        throw new Error("UserService.getUser: user is undefined");
      }
      return this.user;
    }
    set setUser(user : User) {
      if (user === undefined) {
        throw new Error("UserService.setUser: user is undefined");
      }
      this.user = user;
    }



    //post a user. This will allow a user to login.
    postUser(user: User) : Observable<User> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
<<<<<<< HEAD
      return this.httpClient.post<User>(`http://54.153.80.103:9000/user`, user, { headers: header });
=======
      return this.httpClient.post<User>(`http://18.221.74.110:9000/user`, user, { headers: header });
>>>>>>> 1691db644b4766e7706fa228b687f3157770d51f
    }
    //user will need to update their personal information as necessary.
    patchUser(user: User, id: number) : Observable<User> {
      let header: HttpHeaders = new HttpHeaders();
      header.append("aacept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
<<<<<<< HEAD
      return this.httpClient.patch<User>(`http://54.153.80.103:9000/user/${id}`, {username: user.username, password: user.password, email: user.email, phoneNumber: user.phoneNumber}, { headers: header });
=======
      return this.httpClient.patch<User>(`http://18.221.74.110:9000/user/${id}`, {username: user.username, password: user.password, email: user.email, phoneNumber: user.phoneNumber}, { headers: header });
>>>>>>> 1691db644b4766e7706fa228b687f3157770d51f
    }
}
