import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

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
    firstName: this.firstName, lastName: this.lastName, address: this.address,
    phone: this.phone, email: this.email};
    console.log(user);
    this.userService.postUser(user).subscribe;
  }

}
