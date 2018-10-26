import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  newUser: User = {role: 'patient', uid:'', name:'', surname:'', dni:'', username:'', password:''};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  createUser(newRole,newId,newName,newSurname,newDNI,newLogin,newPass){
    this.newUser.role = newRole;
    this.newUser.uid = newId;
    this.newUser.name = newName;
    this.newUser.surname = newSurname;
    this.newUser.dni = newDNI;
    this.newUser.username = newLogin;
    this.newUser.password = newPass;
    this.apiService.addUser(this.newUser);  
}
}
