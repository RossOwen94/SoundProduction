import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Http } from '@angular/http';
import {Observable } from 'rxjs';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {


  rForm: FormGroup;
  email: string;
  password: string;
  emailSuccess: boolean = false;
  emailFailure: boolean = false;
  constructor(public http:Http,private auth: AuthenticationService,private fb:FormBuilder) { 

    this.rForm = fb.group({
      'email'   : [null,Validators.compose([Validators.email,Validators.required])]
    })
  }

  ngOnInit() {

  }

  recover(formData,form: NgForm){
   
    var result = this.sendRecovery(formData).subscribe(result => {
     
      if(result.status==200){
        this.emailSuccess=true;
       
      }
      else{
        this.emailFailure=true;
      }

    })

    return ;

  }

  sendRecovery(formData): Observable<any>{
    return this.http.post('https://gideonsystems.net/forgot/recover',formData);

  }
}
