import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

import { User } from './../../models/user.interface';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient: User;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    const userId = this.route.snapshot.paramMap.get('id');
    this.patient=this.apiService.getPatientDetail(userId);
  }

  ngOnInit() {
  }

}
