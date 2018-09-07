import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampleService } from '../sample.service';
import { Sample } from '../samples/samples.component';
import { CartService } from '../cart.service';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-score-details',
  templateUrl: './score-details.component.html',
  styleUrls: ['./score-details.component.css']
})
export class ScoreDetailsComponent implements OnInit {

  samples: Sample[];
  currentSample: Sample;
  score: string;
  sub: any;
  
  constructor(public cartService: CartService,private route: ActivatedRoute,private sampleService: SampleService,meta: Meta,title: Title) {
    title.setTitle('Lorenz Productions - Sheet Music Downloads');

    meta.addTags([
      { name: 'keywords', content: 'percussion,sheet music,sound recording,scores,marimba, vibraphone,timpani,drums,piano'},
      { name: 'description', content: 'Percussion Sheet Music by Jaren Lorenz. Buy and Download fast.' }
    ]);

   }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params =>{
     
      this.score = params['name'];
      this.sampleService.getSamples().subscribe((newsamples) => {
        this.samples = newsamples; 
        this.currentSample = this.getSample(this.score);
        var waterMark = document.getElementById('waterMark');
        waterMark.setAttribute('src',"https://gideonsystems.net/"+ this.currentSample.name +".jpg");
        var player = document.getElementsByClassName("player");
        var cartButton = document.getElementsByClassName("btn btn-primary")
        if(this.currentSample.name=="Trapsody"){
          player[0].setAttribute('width',"280")
          player[0].setAttribute('height',"157")
          player[0].setAttribute('src',"https://www.youtube.com/embed/_-LITnT3q7Q?rel=0")
          player[0].setAttribute('frameborder',"0")
          player[0].setAttribute('allow',"autoplay; encrypted-media")
          player[0].setAttribute('allowfullscreen',"true")
        }
        else{
          player[0].setAttribute('src',this.currentSample.soundCloud);
        }
        
        cartButton[0].addEventListener('click',()=>{
          this.cartService.addSample(this.currentSample);
        })
      });
    })
  }

  getSample(score): Sample{
      for(let i=0;i<this.samples.length;i++){
        if(this.samples[i].name==score)
          return this.samples[i];
      }
  }

}
