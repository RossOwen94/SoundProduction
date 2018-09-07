import { Injectable } from '@angular/core';
import { Sample } from './samples/samples.component';
import { Observable} from 'rxjs';
import  { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  samples: Sample[] = [];
  subTotal: number = 0.00;
  itemCount: number = 0;
  constructor() { }

  ngOnInit(){
   

  }


getSelectedSamples(){
  return this.samples;
}

getSubTotal(){
    return this.subTotal;
}

getItemCount(){
  return this.itemCount;
}

addSample(Sample){
  
   if(this.findSample(Sample)!=-1)
   {
      window.alert('The selected score is already in your cart.');
      return ;
   }
    this.samples.push(Sample);
    this.itemCount++;
    this.subTotal+=Sample.price;
}

findSample(Sample): number{
  for(let i=0;i<this.samples.length;i++){
    if(this.samples[i].name===Sample.name)
    {
      return i;
    }
  }
  return -1;
}

removeSample(Sample)
  {
    this.subTotal-=Sample.price;
    this.samples.splice(this.findSample(Sample),1);
    this.itemCount--;
    
  }
  //Add an event emitter to change the sidecart display
}
