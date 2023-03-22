import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent {

  @Input()  
  user: User = {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    streetAddress1: '',
    phoneNumber: 0,
    email: ''
  };

}
