import $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { CartService } from '../cart.service';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

  constructor(private sampleService: SampleService, public cartService: CartService,meta: Meta,title: Title) { 

    title.setTitle('Lorenz Productions - Sheet Music Downloads');

    meta.addTags([
      { name: 'keywords', content: 'percussion,sheet music,sound recording,scores,marimba, vibraphone,timpani,drums,piano'},
      { name: 'description', content: 'Percussion Sheet Music by Jaren Lorenz. Buy and Download fast.' }
    ]);

  }

  samples: Sample[];
  firstViewCheck: boolean = true;

  ngOnInit() {
    this.sampleService.getSamples().subscribe((newsamples) => {
      this.samples = newsamples; 
    });
  }

 
  
  ngAfterViewChecked(){
    var players = document.getElementsByClassName("player");
    var cartButtons = document.getElementsByClassName("btn btn-primary");
    if(this.firstViewCheck && cartButtons.length)  
    {
      for(let i=0; i<players.length;i++){
        if(this.samples[i].name=="Trapsody"){
            players[i].setAttribute('width',"280")
            players[i].setAttribute('height',"157")
            players[i].setAttribute('src',"https://www.youtube.com/embed/_-LITnT3q7Q?rel=0")
            players[i].setAttribute('frameborder',"0")
            players[i].setAttribute('allow',"autoplay; encrypted-media")
            players[i].setAttribute('allowfullscreen',"true")
        }
        else{
          players[i].setAttribute('src',this.samples[i].soundCloud);
        }
        
        cartButtons[i].addEventListener('click',()=>{
          this.cartService.addSample(this.samples[i])});
      }
      this.firstViewCheck=false;
    }
  }
}

export interface Sample{
  name: string,
  soundCloud: string,
  longDesc: string,
  instrumentation: [string],
  difficulty: string,
  description: string,
  price: number,
}