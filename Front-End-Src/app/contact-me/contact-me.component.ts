import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  
  rForm: FormGroup;
  name: string;
  email: string;
  message: string;
  emailSuccess: boolean = false;

  constructor(public http: Http, private fb: FormBuilder) { 

    this.rForm = fb.group({
      'name'    : [null,Validators.required],
      'email'   : [null,Validators.compose([Validators.email,Validators.required])],
      'message' : [null,Validators.required]
    })

  }

  ngOnInit() {
  }

  submitForm(formData,form: NgForm){
    this.sendEmail(formData).subscribe( success => {
        if(success){
          this.emailSuccess=true;
        }
    })
  }

  sendEmail(formData): Observable<any>{
    return this.http.post('https://gideonsystems.net/contact/ticket',formData);
  }

  resetForm(){
    this.emailSuccess= false;
    return ;
  }


}
