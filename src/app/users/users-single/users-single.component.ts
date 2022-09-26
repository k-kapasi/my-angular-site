import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users-single',
  templateUrl: './users-single.component.html',
  styleUrls: ['./users-single.component.css']
})
export class UsersSingleComponent implements OnInit {
  user: any;
  constructor(
    private userService : UserService, 
    private route : ActivatedRoute
    ) { }

  ngOnInit() {
    //grab the username out of the url
    this.route.params.subscribe(params =>{
      const username = params['username'];
    
    //use the userservice to get data from github api
    this.userService
    .getUser(username)
    .subscribe(user=>this.user =user);
  });
  }

}
