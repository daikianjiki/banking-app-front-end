import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user : User = {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    streetAddress1: '',
    phoneNumber: 0,
    email: ''
  }

  newUser : User = {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    streetAddress1: '',
    phoneNumber: 0,
    email: ''
  }
  
  constructor(private userService : UserService) {}

  createUser() : void {
    // let user : User = {id: 0, username: this.user.username, password: this.user.password, 
    // firstName: this.user.firstName, lastName: this.user.lastName, streetAddress1: this.user.address,
    // phoneNumber: this.phone, email: this.email};
    this.userService.postUser(this.user).subscribe(json => {this.user =json; console.log(this.user)});

    this.newUser = this.user;
    (console.log(this.newUser));
  }

}
