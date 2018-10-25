import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = '';
  palabra: string;

  constructor(private apiService: ApiService, private router: Router) {
    this.palabra = 'Principal';
  }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();

    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    if (this.apiService.login(username, password)) {
      this.error = '';
      // let roleUser = this.apiService.users.find(element  => element.username === username).role;
      
      // if (roleUser === 'admin') {
      // } else if (roleUser === 'technical') {
      // } else if (roleUser === 'doctor') {
      // } else if (roleUser === 'patient') {
      // }
      
      this.router.navigate(['dashboard']);
    } else {
      this.error = 'Usuario o contraseña incorrecto';
    }
  }
}
