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
    age: ['', Validators.required] 
  });
  constructor(private fb: FormBuilder,
              private configData: Configdata) { }


  ngOnInit() {

  }

  public registerFormSubmission() {
    console.log(this.userRegisterForm.value);
  }

  public ageCalculator() {
    let dob: any = this.userRegisterForm.get('dob')?.value;
    if (!dob) return;
    dob = new Date(dob)
    const currentDate = new Date();
    let age: number = 0;
    age = currentDate.getFullYear() - dob.getFullYear();
    const monthDiff = currentDate.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate())) {
      age--;
    }
    this.userRegisterForm.controls.age.setValue(String(age));
  }

}
