import { Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guardService';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsListComponent } from './elements/patients-list/patients-list.component';
import { PatientDetailsComponent } from './elements/patient-details/patient-details.component';
import { HistoryDetailsComponent } from './elements/history-details/history-details.component';
import { HistoriesListComponent } from './elements/histories-list/histories-list.component';
import { UsersListComponent } from './elements/users-list/users-list.component';
import { CreateUserComponent } from './elements/create-user/create-user.component';
import { UserDetailsComponent } from './elements/user-details/user-details.component';

export const routes: Routes = [
    {   
        path:'create-user',
        component: CreateUserComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'history-details/:id',
        component: HistoryDetailsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'patient-details/:id',
        component: PatientDetailsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'users-list',
        component: UsersListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'user-details/:id',
        component: UserDetailsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'histories-list',
        component: HistoriesListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'patients-list',
        component: PatientsListComponent,
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
