import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  name: string[] ;

  constructor() {
    this.name = ['ychalla1', 'user2', 'gopal3', 'yash4'];
  }

  ngOnInit() {
  }

}
