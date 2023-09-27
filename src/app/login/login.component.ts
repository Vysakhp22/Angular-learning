import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthServiceService } from '../services/auth-service.service';

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

  constructor(private snackBar: MatSnackBar, private authService: AuthServiceService) { }

  public get loginFormControls() {
    return this.loginForm?.controls;
  }

  ngOnInit() {
  }

  public async loginFormSubmit() {
    // let d: any
    // this.authService.adminDatacheck().then(v => d = v);
    const data: any = await this.authService.adminData().toPromise();
    const user: any = JSON.parse(localStorage.getItem('user-data')!);

    if (data?.userName === this.loginForm?.value?.userName && data?.password === this.loginForm?.value?.password) {
      this.openSnackBar('success');
    }
  }
  private openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

}
