import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { History } from '../models/history.interface';
import { StateManagerService } from '../services/state-manager.service';

@Injectable( {
    providedIn: 'root'
} )

export class ApiService {
    users: Array<User> = [
        { role: 'admin', uid: "1", name: "Manolo", surname: "Fernandez", dni: "123456789K", username: "manolo", password: "12345" },
        { role: 'patient', uid: "0001", name: "Juan", surname: "Lopez", dni: "123456789J", username: "juan", password: "12345" },
        { role: 'patient', uid: "0002", name: "Marc", surname: "Benedito", dni: "123456789D", username: "mabepo", password: "12345" },
        { role: 'doctor', uid: "001", name: "Cristian", surname: "Martinez", dni: "123456789M", username: "cristian", password: "12345" },
        { role: 'technical', uid: "01", name: "Javi", surname: "Guerra", dni: "123456789N", username: "javi", password: "12345" }
    ];

    histories: Array<History> = [
        { userId: "0001", doctorId: "001", log: ["Dolor de cabeza", "Virus estomacal"]},
        { userId: "0002", doctorId: "001", log: ["Dolor de garganta", "3 dedos rotos"]}
    ];

    constructor( private stateManager: StateManagerService ) {}
    login( user, pass ) {
        // logic
        const userObject = this.users.find( item => item.username === user && item.password === pass )

        if ( userObject ) {
            this.stateManager.login( userObject )
        } 
        return userObject;
    }

    getPatients() {
        return this.users.filter( user => user.role === 'patient');
    }

    getPatientDetail(uid) {
        return this.users.find( user => user.uid === uid );
    }

    getHistoriesList() {
        return this.histories;
    }

    getPatientsList() {
        return this.users.filter( user => user.role === 'patient');
    }
}
