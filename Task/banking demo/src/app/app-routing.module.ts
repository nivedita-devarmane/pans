import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DepositComponent } from './calculator/deposit/deposit.component';
import { LoanComponent } from './calculator/loan/loan.component';
import { RdComponent } from './calculator/deposit/rd/rd.component';
import { FdComponent } from './calculator/deposit/fd/fd.component';
import { AutoloanComponent } from './calculator/loan/autoloan/autoloan.component';
import { PersonalloanComponent } from './calculator/loan/personalloan/personalloan.component';
import { HomeloanComponent } from './calculator/loan/homeloan/homeloan.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'contactus', component: ContactusComponent
  },
  {
    path: 'calculator', component: CalculatorComponent,
    children: [{
      path: 'deposit', component: DepositComponent,
      children: [{ path: 'rd', component: RdComponent },
      { path: 'fd', component: FdComponent }]
    },
    { path: 'loan', component: LoanComponent, children: [
      { path: 'homeloan', component: HomeloanComponent }, 
      { path: 'autoloan', component: AutoloanComponent }, 
      { path: 'personalloan', component: PersonalloanComponent }] 
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
