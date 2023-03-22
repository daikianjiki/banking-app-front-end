import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  user : User = {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    streetAddress1: '',
    phoneNumber: 0,
    email: ''
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {
      //this.refresh();
  }

  refresh(): void {
    this.userService.getUser(this.user.id).subscribe(json =>this.user = json);
  }

}
