import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './Home/Home.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  // { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: UserRegisterComponent },
    ]
  },
  { path: 'settings', canActivate: [AuthGuard], component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
