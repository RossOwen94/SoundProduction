import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import  {map} from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';
import { Http } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get', type: 'login'|'register'|'profile' | 'transaction',user?: TokenPayload): Observable<any> {
    let base;
  
    if (method === 'post') {
        base = this.http.post(`https://gideonsystems.net/users/${type}`, user);
    } else {
      base = this.http.get(`https://gideonsystems.net/users/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
    

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
  
    return request;
  }

  public transaction(transactionData: PaymentTokenPayload): Observable<any> {
    console.log(transactionData);
    let transToken = this.http.post('https://gideonsystems.net/users/transaction',{transactionData: transactionData},{ headers: { Authorization: `Bearer ${this.getToken()}` }},);
    const token = transToken.pipe(map((data: TokenResponse) => {
        if(data.token){
          console.log(data.token);
          this.saveToken(data.token);
        }
        return data;
    })
  );
    return token;
  }

  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }
  
  public login(user: TokenPayload): Observable<any> {
    console.log(user);
    return this.request('post', 'login', user);
  }
  
  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  public updateToken(data){
    localStorage.setItem('mean-token', data);
    this.token = data;

  }


}

export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  purchases: [string];
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}
export interface PaymentTokenPayload{
  name: string;
  email: string;
  total: number;
  items: [{
      name: string;
      price: string;
      currency: string;
      quantity: string;
  }];
  saleId: string;

}
export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
  subscription: boolean;
}

export interface PurchaseTokenPayload {
  _id: string;
  email: string;
  name?: string;
  scores: [string];
  exp: number;
  iat: number;
}
