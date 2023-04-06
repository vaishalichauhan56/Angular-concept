import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  form: LoginForm = {
    email: '',
    password: '',
    confirm_password:''
  }
  submit() {
    alert(this.form);
  }
} 
