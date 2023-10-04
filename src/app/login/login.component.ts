import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  public verticalPosition: MatSnackBarVerticalPosition = 'top';

  public loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private snackBar: MatSnackBar, private authService: AuthService, private router: Router) { }
  public user: any;
  public adminData: any;
  public get loginFormControls() {
    return this.loginForm?.controls;
  }

  async ngOnInit() {
    this.adminData = await this.authService.adminData().toPromise();
    this.user = JSON.parse(localStorage.getItem('user-data')!);
  }

  public loginFormSubmit() {
    // let d: any
    // this.authService.adminDatacheck().then(v => d = v);

    if (this.adminData?.userName === this.loginForm?.value?.userName && this.adminData?.password === this.loginForm?.value?.password) {
      this.authService.loggedIn();
      this.router.navigate(['/settings']);
    } else if (this.user?.email === this.loginForm?.value?.userName && this.user?.password === this.loginForm?.value?.password) {
      this.authService.loggedIn();
      this.router.navigate(['/settings']);
    }
  }
  private openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

}
