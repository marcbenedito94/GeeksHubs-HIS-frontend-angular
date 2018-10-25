import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.user=this.apiService.getUserDetails(userId);
  }

}
