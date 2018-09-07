import { Component, OnInit } from '@angular/core';
import { Sample } from '../samples/samples.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.css']
})
export class SideCartComponent implements OnInit {

  samples: Sample[];
  subTotal: number;
  itemCount: number;
  prevCount: number = 0;
  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.samples = this.cartService.getSelectedSamples();
    this.subTotal = this.cartService.getSubTotal();
    this.itemCount = this.cartService.getItemCount();
  }

  ngDoCheck(){
    this.samples = this.cartService.getSelectedSamples();
    this.subTotal=this.cartService.getSubTotal();
    this.itemCount=this.cartService.getItemCount();
    if(this.itemCount==(this.prevCount-1)){
      this.prevCount=this.itemCount;
    }
  }
 
  ngAfterViewChecked(){
    this.subTotal=this.cartService.getSubTotal();
    this.itemCount=this.cartService.getItemCount();
    var removeButtons = document.getElementsByClassName('removeButton');
    if(removeButtons.length>this.prevCount)
    {
      var currentSample = this.getButtonsSample(removeButtons[this.prevCount].getAttribute('data-samplename')); 
      removeButtons[this.prevCount].addEventListener('click',()=>{
        this.cartService.removeSample(currentSample);
      });
      this.prevCount++;
    }

  }

  getButtonsSample(sampleName){
     for(let i = 0; i < this.samples.length; i++){
        if(this.samples[i].name==sampleName){
            return this.samples[i];
        }
     }
  }

}



