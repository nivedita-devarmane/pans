import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
num1:number;
num2:number;
res :number;
switch :boolean = true;
  constructor() { }

  ngOnInit() {
  }
  sum(number1:number, number2:number)
  {
    this.num1 = number1;
    this.num2 = number2;
    this.res =  Number(this.num1) + Number(this.num2);
  }
  mul(number1:number, number2:number)
  {
    this.num1 = number1;
    this.num2 = number2;
    this.res =  this.num1 * this.num2;
  }
  sub(number1:number, number2:number)
  {
    this.num1 = number1;
    this.num2 = number2;
    this.res =  this.num1 - this.num2;
  }

  div(number1:number, number2:number)
  {
    this.num1 = number1;
    this.num2 = number2;
    this.res =  this.num1 / this.num2;
  }
  toggle()
  {
    this.switch = !this.switch;
  }
}
