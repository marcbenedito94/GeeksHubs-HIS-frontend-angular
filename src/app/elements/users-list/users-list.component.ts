import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList=[];

  constructor(private apiService:ApiService) {
    this.usersList=this.apiService.getUsersList();
  }

  ngOnInit() {
  }

}
