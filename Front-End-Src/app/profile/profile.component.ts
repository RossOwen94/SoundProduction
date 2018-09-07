import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { PurchaseTokenPayload } from '../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent {
  details: UserDetails;
  scores: Purchase[];
  name: String;

  constructor(private auth: AuthenticationService) {}

  //This component will display some basic profile info like 
  //The users name,email,list of purchased scores
  //Options to: reset password, go to downloads, logout
  //            submit a support ticket
  //


  ngOnInit() {    
    window.scrollTo(0,300);
    this.auth.profile().subscribe(user => {
      this.details = user;
      this.getScoresFromToken();
      this.name = this.details.name.split(' ')[0];
    }, (err) => {
      console.error(err);
    });
  }
  
  getScoresFromToken(){
    let payload,token,k=0;
    var decodedToken: PurchaseTokenPayload;
    this.scores= [];
    for(let i=0;i<this.details.purchases.length;i++){
      token = this.details.purchases[i];
      payload = token.split('.')[1];
      payload = window.atob(payload);
      decodedToken =  JSON.parse(payload);
     
      
      for(let j=0;j<decodedToken.scores.length;j++){
        var newExp = new Date();
        newExp.setTime(decodedToken.exp*1000);
        var nextPurchase = {name:decodedToken.scores[j],exp:newExp};
        this.scores.push(nextPurchase);
      }
    }
    return ;
  }

  showDash(){
    if(this.details.email=="rossgideon@my.unt.edu")
      return true;
    if(this.details.email=="Jarendlorenz@gmail.com")
      return true;
    else
      return false;
  }
    

}

interface Purchase{
  name: String;
  exp: Date;
}