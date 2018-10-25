import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../services/api.service';

import { History } from './../../models/history.interface';
import { User } from './../../models/user.interface';

@Component({
  selector: 'app-histories-list',
  templateUrl: './histories-list.component.html',
  styleUrls: ['./histories-list.component.css']
})
export class HistoriesListComponent implements OnInit {

  historiesList: Array<History>;
  patientsList: Array<User>;

  constructor(private apiService: ApiService) {
    this.historiesList=this.apiService.getHistoriesList();
    this.patientsList=this.apiService.getPatientsList();
  }

  ngOnInit() {
  }

}
