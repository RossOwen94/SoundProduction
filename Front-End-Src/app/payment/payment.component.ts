import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Sample } from '../samples/samples.component';
import { PaymentTokenPayload } from '../authentication.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { UserDetails,PurchaseTokenPayload } from '../authentication.service';
declare let paypal: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})



export class PaymentComponent implements OnInit {

  samples: Sample[];
  subTotal: number;
  itemCount: number;
  item_list: String;
  buttonScriptLoaded: boolean = false;
  loggedIn: boolean = false;

  buildItemList(samples){
    let i =0;
    var item_list_string = "item_list: { items: [";
    for(i=0; i<samples.length;i++){
      item_list_string += "{ name: '" + samples[i].name +"',quantity: '1',price: '" + samples[i].price +
      "',currency: 'USD'}";
      if(i!=(samples.length-1)){
        item_list_string +=",";
      }
    }

    item_list_string += "]}";
    return item_list_string;
  }

  constructor(private auth: AuthenticationService,public cartService: CartService, private router: Router,public http:HttpClient) { }

  ngOnInit() {

   if(!this.auth.isLoggedIn()){
    this.router.navigate(['/login-message']);
   }
    
   
    this.samples= this.cartService.getSelectedSamples();
    this.checkScores();
    this.samples= this.cartService.getSelectedSamples();
    this.subTotal = this.cartService.getSubTotal();
    this.item_list = this.buildItemList(this.samples);
    

    var paypalScript = document.createElement('script');
    
    paypalScript.textContent="paypal.Button.render({\
      env: 'production',\
      client: {\
        production:'AUO6x_LnK6xbnnnVNjENeMseWEPiE2kjUMZLYc6W7gfsArvPjMxso3woKrILKk-QzBDzEpcoxGPTbY4D'\
      },\
      payment: function (data, actions) {\
        \
        return actions.payment.create({\
          transactions: [{\
            amount: {\
              total: '" + this.subTotal + "',\
              currency: 'USD'\
            },\
            " + this.item_list +"\
          }]\
        });\
      },\
      onAuthorize:function(data, actions) {\
          return actions.payment.execute()\
            .then((data,actions)=>{\
              document.querySelector('#paypal-button').dispatchEvent(new CustomEvent('onPaymentCompleted', {bubbles: true, detail: {transactionData: data} }));\
            });\
      }\
    }, '#paypal-button');";
    
    document.body.appendChild(paypalScript);
   
    this.buttonScriptLoaded = true;
  }

  ngAfterViewChecked(){
    var removeButtons = document.getElementsByClassName('removeButton');
    for(let i=0;i<removeButtons.length;i++)
    {
      removeButtons[i].parentNode.removeChild(removeButtons[i]);
    }
    let checkout = document.getElementsByClassName('btn btn-secondary');
    if(checkout.length){
      //Remove it
         checkout[0].parentNode.removeChild(checkout[0]);
    }
    
  }
  goToDownload(data){
    var data = data.detail.transactionData;
   
    var transactionData: PaymentTokenPayload = {
      name: data.payer.payer_info.first_name + " " + data.payer.payer_info.last_name,
      email: data.payer.payer_info.email,
      total: data.transactions[0].amount.total,
      items: data.transactions[0].item_list.items,
      saleId: data.transactions[0].related_resources[0].sale.id
    };

   this.auth.transaction(transactionData).subscribe((data)=>{
   
    this.router.navigate(['/download']);
  });
  }

  checkScores(){
     var decodedToken: UserDetails;
      var token = this.auth.getToken();
      let payload = token.split('.')[1];
     
      payload = window.atob(payload);
    
      decodedToken = JSON.parse(payload);
    
      for(let i=0;i<decodedToken.purchases.length;i++){
          var decodedPayToken: PurchaseTokenPayload;
          let purchaseToken = decodedToken.purchases[i];
         
          payload = purchaseToken.split('.')[1];
         
          payload = window.atob(payload);
          decodedPayToken = JSON.parse(payload);
          for(let j=0;j<decodedPayToken.scores.length;j++){
            for(let k=0;k<this.samples.length;k++){
              if(decodedPayToken.scores[j]===this.samples[k].name){
                window.alert('You own this score already! <'+ this.samples[k].name + '>\nIt has been removed from your cart.');
                this.cartService.removeSample(this.samples[k]);
              }
            }
          }
      }
  }


}


