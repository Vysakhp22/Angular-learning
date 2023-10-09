import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
    age: ['', Validators.required],
    password: ['', Validators.required],
    cpassword: ['', [Validators.required, this.confirmPasword()]]
  });

  constructor(private fb: FormBuilder, private configData: Configdata) { }

  //get method return all the form controls
  public get userRegisterFormConrtols() {
    return this.userRegisterForm?.controls;
  }

  ngOnInit() {

  }

  private confirmPasword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === this.userRegisterFormConrtols?.password.value ? null : { confirm: true };
    }
  }

  public registerFormSubmission() {
    this.userRegisterForm.markAllAsTouched()
    if (!this.userRegisterForm.valid) return;
    localStorage.setItem('user-data', JSON.stringify(this.userRegisterForm?.value));
  }

  public ageCalculator() {
    let dob: any = this.userRegisterForm.get('dob')?.value; //getting dob 
    if (!dob) return;
    //the type of dob is string getFullYear(), getMonth(), getDate() these funtions works only for Date type
    //so need to convert it to date
    dob = new Date(dob);
    const currentDate = new Date(); //getting current date
    let age: number = 0;
    age = currentDate.getFullYear() - dob.getFullYear();
    const monthDiff = currentDate.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate())) {
      age--;
    }
    this.userRegisterForm.controls.age.setValue(String(age)); //assiging value to the form control, type of age is date, from control accept only string value so need to convert it to string
  }

}
