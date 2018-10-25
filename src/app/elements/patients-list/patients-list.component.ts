import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ApiService } from './../../services/api.service';

import { User } from './../../models/user.interface';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  patientsList: Array <User> ;

  constructor(private apiService: ApiService, private location: Location) {
    this.patientsList = this.apiService.getPatientsList();
  }

  ngOnInit() {
  }

}
