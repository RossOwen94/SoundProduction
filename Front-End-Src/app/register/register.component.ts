import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: '',
    subscription: false
  };

  rForm: FormGroup;
  email: string;
  name: string;
  password: string;
  viewPolicy: boolean= false;
  viewPrivacy: boolean= false;
  viewTerms: boolean=false;

  constructor(private auth: AuthenticationService, private router: Router,private fb:FormBuilder) {
    this.rForm = fb.group({
      'email'   : [null,Validators.compose([Validators.email,Validators.required])],
      'name'  : [null,Validators.compose([Validators.required])],
      'password'    : [null,Validators.compose([Validators.required,Validators.minLength(6)])],
      'privacy'     : [null,Validators.required],
      'subscription': ['']
    })


  }

  register(formData,form: NgForm) {
    console.log(formData);
    this.credentials.email=formData.email;
    this.credentials.password=formData.password;
    this.credentials.name = formData.name;
    this.credentials.subscription = formData.subscription;
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }

  showTerms(){
    
        if(this.viewPrivacy==true)
          this.viewPrivacy=false;
        if(this.viewPolicy==false)
          this.viewPolicy=true;
        if(this.viewTerms==false)
          this.viewTerms=true;
  }
  showPrivacy(){
  
    if(this.viewTerms==true)
      this.viewTerms=false;    
    if(this.viewPolicy==false)
      this.viewPolicy=true;
    if(this.viewPrivacy==false)
      this.viewPrivacy=true;
  }
}