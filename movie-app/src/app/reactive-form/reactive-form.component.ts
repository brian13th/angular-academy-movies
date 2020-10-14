import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  passwordValidate(): ValidatorFn {
    return (control: AbstractControl): {[key:string]: any} | null => {
      let password: boolean = false
      if(control.value == control.value.toLocaleLowerCase() || control.value == control.value.toUpperCase()){
        password = true;
      }

      return password ? {passwordCheck: {value:control.value}} : null
    }
  }

  signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, this.passwordValidate()]),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', Validators.required)
  })

  latestRefresh(){
    return new Date().toLocaleString()
  }

  get username() {
    return this.signUpForm.get('username');
  }
  get emailField() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get role() {
    return this.signUpForm.get('role');
  }
  constructor(private router: Router) { }

  submitData(){
    this.router.navigate(['messages']);
  }

  ngOnInit(): void {

  }


}
