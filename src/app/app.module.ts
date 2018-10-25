import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthGuard} from './services/auth.guardService';
import { ApiService } from './services/api.service';
import { StateManagerService } from './services/state-manager.service';

import { routes } from './router.config';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsListComponent } from './elements/patients-list/patients-list.component';
import { HistoriesListComponent } from './elements/histories-list/histories-list.component';
import { UsersListComponent } from './elements/users-list/users-list.component';
import { PatientDetailsComponent } from './elements/patient-details/patient-details.component';
import { HistoryDetailsComponent } from './elements/history-details/history-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PatientsListComponent,
    HistoriesListComponent,
    UsersListComponent,
    PatientDetailsComponent,
    HistoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AuthGuard, ApiService, StateManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
