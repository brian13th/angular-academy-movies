import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(4)]),
      password: new FormControl('', Validators.required),
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
  constructor() { }

  ngOnInit(): void {

  }

}
