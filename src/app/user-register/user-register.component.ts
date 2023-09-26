import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Configdata } from '../services/config-data';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public panelOpenState: boolean = false;
  public userRegisterForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.configData.emailRegex)]],
    mobile: [, [Validators.required, Validators.pattern(this.configData.mobileRegex)]],
    dob: ['', Validators.required],
    address: ['', Validators.required],
    age: [0, Validators.required] //TODO age calcultion
  });
  constructor(private fb: FormBuilder,
    private configData: Configdata) { }


  ngOnInit() {
  }

  public registerFormSubmission() {
    console.log(this.userRegisterForm.value);
  }

}
