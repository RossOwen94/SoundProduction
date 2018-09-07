import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SamplesComponent } from './samples/samples.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { SideCartComponent } from './side-cart/side-cart.component';
import { DownloadComponent } from './download/download.component';
import { LoginComponent } from './login/login.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { CartService } from './cart.service';
import { LogoutComponent } from './logout/logout.component';
import { LoginMessageComponent } from './login-message/login-message.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ScoreDetailsComponent } from './score-details/score-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'samples',component:SamplesComponent},
  {path:'payment',component:PaymentComponent},
  {path:'download',component:DownloadComponent},
  {path:'contactMe',component:ContactMeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'logout', component:LogoutComponent},
  {path: 'login-message', component:LoginMessageComponent},
  {path: 'forgot',component:ForgotComponent},
  {path: 'score-details/:name',component: ScoreDetailsComponent},
  {path: 'dashboard',component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SamplesComponent,
    PaymentComponent,
    CartComponent,
    SideCartComponent,
    DownloadComponent,
    LoginComponent,
    ContactMeComponent,
    ProfileComponent,
    RegisterComponent,
    LogoutComponent,
    LoginMessageComponent,
    ForgotComponent,
    ScoreDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthenticationService,AuthGuardService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
