import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  username: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  phone: number = 0;
  email: string = '';

  constructor(private userService : UserService) {}

  createUser() : void {
    let user : User = {id: 0, username: this.username, password: this.password, 
    firstName: this.firstName, lastName: this.lastName, streetAddress1: this.address,
    phoneNumber: this.phone, email: this.email};
    console.log(user);
    console.log(this.userService.postUser(user).subscribe(json => json));
  }

}
