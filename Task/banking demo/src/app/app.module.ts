import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DepositComponent } from './calculator/deposit/deposit.component';
import { LoanComponent } from './calculator/loan/loan.component';
import { FdComponent } from './calculator/deposit/fd/fd.component';
import { RdComponent } from './calculator/deposit/rd/rd.component';
import { HomeloanComponent } from './calculator/loan/homeloan/homeloan.component';

import { AutoloanComponent } from './calculator/loan/autoloan/autoloan.component';
import { PersonalloanComponent } from './calculator/loan/personalloan/personalloan.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    CalculatorComponent,
    DepositComponent,
    LoanComponent,
    FdComponent,
    RdComponent,
    HomeloanComponent,
    
    AutoloanComponent,
    
    PersonalloanComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
