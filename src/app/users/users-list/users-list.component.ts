import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users : any;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.users =this.userService.getUsers();
    
  }

}
