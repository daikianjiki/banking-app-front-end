import { Component, EventEmitter, Output } from '@angular/core';
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
    streetAddress1: '',
    phoneNumber: 0,
    email: ''
  }
  newUser : User = {
    id: 0,
    username: '',
    password: '',
    streetAddress1: '',
    phoneNumber: 0,
    email: ''
  }
  message : string = "Your registration was successful!";
  show : boolean = false;
  show2 : boolean = true;
  
  constructor(private userService : UserService) {}

  createUser() : void {
    this.userService.postUser(this.user).subscribe(json => {
      this.user =json; 
      console.log(this.user); 
      this.newUser = this.user; 
      console.log(this.newUser)});
      this.show = true;
      this.show2 = false;
  }
}
