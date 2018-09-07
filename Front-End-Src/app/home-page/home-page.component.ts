import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(meta: Meta,title: Title) {

    title.setTitle('Lorenz Productions - Sheet Music Downloads');

    meta.addTags([
      { name: 'keywords', content: 'percussion,sheet music,sound recording,scores,marimba, vibraphone,timpani,drums,piano'},
      { name: 'description', content: 'Percussion Sheet Music by Jaren Lorenz. Buy and Download fast.' }
    ]);
   }

  ngOnInit() {
  }

}
