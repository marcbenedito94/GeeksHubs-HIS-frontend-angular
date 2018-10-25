import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StateManagerService } from '../services/state-manager.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private stateManager: StateManagerService, private router : Router) { }

  userObject = this.stateManager.getUser();
  
  ngOnInit() {
  }

  //let roleUser = this.apiService.users.find(element  => element.username === username).role;

  logout(){
    this.stateManager.logout();
    this.router.navigate(['login'])
  }
}
