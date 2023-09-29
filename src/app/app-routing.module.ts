import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: UserRegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
