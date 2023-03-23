import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  @Input()  
  user : User = {
    id: 0,
    username: '',
    password: '',
    streetAddress1: '',
    phoneNumber: 0,
    email: ''
  }

  show : boolean = false;

  constructor(private userService : UserService) {}

  saveChanges() : void {
    this.userService.patchUser(this.user, this.user.id).subscribe(json => {
      this.user = json;
      console.log("updated user: " +this.user)});
      this.openUpdate();
  }

  //this will show the update menu when clicked. When you saveChanges(), it will unmount.
  openUpdate() {
    this.show = !this.show;
  }
}
