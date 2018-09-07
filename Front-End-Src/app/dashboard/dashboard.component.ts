import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { HttpClient,HttpClientModule, HttpResponse } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import  {map} from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Sample } from '../samples/samples.component';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  option: string;
  addSuccess: boolean = false;
  transactions: Transaction[];
  users: UserDetails[];
  samples: Sample[];
  isEditing: boolean= false;
  selectedScore: string;
  updateSuccess: boolean= false;
  removeSuccess: boolean=false;
  removing: boolean=false;

  rForm: FormGroup;
  updateForm: FormGroup;
  email: string;
  name: string;
  password: string;

  constructor(private fb:FormBuilder,private http:HttpClient,public auth:AuthenticationService,private sampleService:SampleService) { 

    this.rForm = fb.group({
      'name'   : [null],
      'soundcloud'  : [null,Validators.compose([Validators.required])],
      'difficulty'    : [null,Validators.required],
      'instrumentation'    : [null,Validators.required],
      'shortDesc'    : [null,Validators.required],
      'longDesc'    : [null,Validators.required],
      'price'    : [null,Validators.required]
    })


  }

  ngOnInit() {

    this.getTransactions().subscribe((newtrans) => {
      this.transactions = newtrans; 
      console.log(this.transactions);
    });
    this.getUsers().subscribe((newusers) => {
      this.users = newusers; 
      console.log(this.users);
    });
    this.sampleService.getSamples().subscribe((newsamples) => {
      this.samples = newsamples; 
      console.log(this.samples);
    });

  }



  setOption(newOption){
    this.option=newOption;
  }

  addScore(formData,form: NgForm){
    this.sendForm(formData).subscribe();
    this.addSuccess=true;
  }

  closeAddForm(){
    this.rForm.reset();
    this.addSuccess=false;
    this.sampleService.getSamples().subscribe((newsamples) => {
      this.samples = newsamples; 
     
    });
  }

  sendForm(formData): Observable<any>{
    return this.http.post('https://gideonsystems.net/admin/add',{scoreData: formData},{headers: {Authorization: `Bearer ${this.auth.getToken()}` }});

  }


  getTransactions(): Observable<any>{
    return this.http.get('https://gideonsystems.net/admin/transactions',{headers: {Authorization: `Bearer ${this.auth.getToken()}`}});
  }

  getUsers(): Observable<any>{
    return this.http.get('https://gideonsystems.net/admin/users',{headers: {Authorization: `Bearer ${this.auth.getToken()}`}});
  }

  setSelectedScore(score){
    this.selectedScore=score;
    this.isEditing=true;
    this.removing=false;
  }

  closeEditor(){
    this.isEditing=false;
    this.removing=false;
    this.selectedScore="";
    this.updateSuccess=false;
    this.removeSuccess=false;
    this.rForm.reset();
    this.sampleService.getSamples().subscribe((newsamples) => {
      this.samples = newsamples; 
    });
  }

  updateScore(formData,form: NgForm,scoreName){
    this.sendUpdate(formData,scoreName).subscribe((response)=>{
      if(response){
          this.updateSuccess= true;
          return ;
      }
  });

  }

  sendUpdate(formData,scoreName): Observable<any>{
    return this.http.post('https://gideonsystems.net/admin/update',{scoreData: formData,scoreName},{headers: {Authorization: `Bearer ${this.auth.getToken()}` }});

  }

  openRemove(score){
    this.removing=true;
    this.isEditing=true;
    this.selectedScore=score;
  }

  removeScore(score){
      this.sendRemoval(score).subscribe(()=>{
        this.removeSuccess=true;
      },(err)=>{
        console.log(err);
      })
      return ;
  }
  sendRemoval(score): Observable<any>{
    return this.http.post('https://gideonsystems.net/admin/remove',{scoreName: score},{headers: {Authorization: `Bearer ${this.auth.getToken()}` }});
  }

}


interface Transaction{
  date: Date,     //I generate this, not provided
  name: string,   //Comes from transactionData
  email: string,            //Comes from user JWT 
  paypalEmail: string,
  items: string[],
  total: number,            //Price of the order
  transactionId: string,
  exp: Date  
}

interface UserDetails{
  email: string,
  name: string,
  purchases: string[],
  hash: string,
  salt: string
}