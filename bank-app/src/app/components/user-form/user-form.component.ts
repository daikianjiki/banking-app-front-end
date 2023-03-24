import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Input()
  user : User = {
    userId: 0,
    username: '',
    password: '',
    streetAddress1: '',
    phoneNumber: 0,
    email: ''
  };
  
  constructor() {}
}
