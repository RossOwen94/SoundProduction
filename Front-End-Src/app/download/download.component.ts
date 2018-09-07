import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AuthenticationService} from '../authentication.service';
import { ResponseContentType} from '@angular/http';
import { map } from 'rxjs/operators';
import { saveAs } from 'file-saver';




@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  urls: string[];
  linkscores: {href:string,name:string}[];
  firstCheck: boolean = true;

  constructor(public auth: AuthenticationService,public http:HttpClient) { }


  //This component is going to be a page with a shit ton of links(potentially) 
  //This list will be the result of hitting the download controller with a post request
  //Containing just the user token. The user token will contain all purchaseTokens the user has 
  //Ever gotten. The download controller will loop through the purchaseTokens and build an array 
  //of links,one for each score(so long as the token is not expired). The page will display
  //These links as <a> tags that either open in another window or trigger an auto download in the 
  //Same page

  ngOnInit() {
    this.linkscores= [];
     this.getURLs().subscribe(URLs =>{
       for(let i=0;i<URLs.verifiedURLs.length;i++){
        var newLink = new Object({href: URLs.verifiedURLs[i],name: this.getName(URLs.verifiedURLs[i])});
          this.linkscores.push({href: URLs.verifiedURLs[i],name: this.getName(URLs.verifiedURLs[i])});
       }
     
      

       });
}
ngAfterViewChecked(){
  var downloadlinks = document.getElementsByClassName('downloadLink');
    if(this.firstCheck){
        for(let i=0;i<downloadlinks.length;i++){
          this.firstCheck = false;
          downloadlinks[i].addEventListener('click',()=>{
                  var baseUrl = 'https://gideonsystems.net/download/serve?id=';
                return this.http.get(`${baseUrl}`+`${downloadlinks[i].getAttribute('data-sample')}`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }, responseType:'blob' as 'json'})
                .pipe().subscribe((data)=>{
                      console.log(data);
                      var file = new Blob([data], {type: 'application/pdf'});
                      var link = document.createElement('a');
                      var fileUrl = URL.createObjectURL(file);
                      link.href= fileUrl;
                      link.download = 'score_download.pdf';
                      link.click();
                  })
          });
      }
      

    }
    
  }
     
  getName(url: string){
    var name = url.split('=')[1];
    return name;
  }

  getURLs():any{
      var response = this.http.get('https://gideonsystems.net/download/userScores',{ headers: { Authorization: `Bearer ${this.auth.getToken()}` }})
      return response;
  }


  }