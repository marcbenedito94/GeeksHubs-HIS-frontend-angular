import { Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guardService';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsListComponent } from './elements/patients-list/patients-list.component';
import { PatientDetailsComponent } from './elements/patient-details/patient-details.component';
import { HistoriesListComponent } from './elements/histories-list/histories-list.component';
import { UsersListComponent } from './elements/users-list/users-list.component';

export const routes: Routes = [
    {
        path: 'patient-details',
        component: PatientDetailsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'users-list',
        component: UsersListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'histories-list',
        component: PatientsListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'patients-list',
        component: HistoriesListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    }
    
    // { path: '**', component: NotFoundComponent },
];
