import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { userAuthGuard } from './guards/user-auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { OnetodoComponent } from './onetodo/onetodo.component';
import { FetchComponent } from './fetch/fetch.component';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'signup/:id', component: OnetodoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'fetch', component: FetchComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [userAuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [{ path: 'editprofile', component: EditprofileComponent }],
  },
  { path: '**', component: NotfoundComponent },
];
