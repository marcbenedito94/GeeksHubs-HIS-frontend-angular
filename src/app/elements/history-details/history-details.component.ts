import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from './../../services/api.service';
import { User } from './../../models/user.interface';
import { History } from './../../models/history.interface';

@Component({
  selector: 'app-histories-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css']
})
export class HistoryDetailsComponent implements OnInit {

  history: History;
  user: any;
  doctor: User;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const historyId = this.route.snapshot.paramMap.get('id');
    this.history=this.apiService.getHistoryDetail(historyId);
    this.user=this.apiService.getUserDetails(historyId);
    this.doctor=this.apiService.getUserDetails(this.history.doctorId);
  }
}