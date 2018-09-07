import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  credentials: TokenPayload = {
    email: '',
    password: '',
    subscription: false
  };

  rForm: FormGroup;
  email: string;
  password: string;

  constructor(private auth: AuthenticationService, private router: Router,private fb:FormBuilder) {
    this.rForm = fb.group({
        'email'   : [null,Validators.compose([Validators.email,Validators.required])],
        'password'    : [null,Validators.compose([Validators.required,Validators.minLength(6)])]
      })
  }
  
  ngOnInit() {
  }
  

  login(formData,form: NgForm) {
    
    this.credentials.email=formData.email;
    this.credentials.password=formData.password;
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }

}