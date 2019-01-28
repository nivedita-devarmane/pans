import { Component, OnInit } from '@angular/core';
import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';

@Component({
  selector: 'app-fd',
  templateUrl: './fd.component.html',
  styleUrls: ['./fd.component.css']
})
export class FdComponent implements OnInit {
  // principal: number;
  interest: number=10;
  maturity: number;
  constructor() { }

  ngOnInit() {
  }

  calculateFdMaturity(p: number, t: number): number {
     //this.maturity = p * (1 + (this.time / 25)) * ( 4 * t);
     //this.maturity = p *  t;
    // let months = t * 12;
     // this.maturity = p*(1+(this.interest/25))^(4*t)
    let a = (1 + (this.interest/100));
    return this.maturity = p * Math.pow(a, t);
       }

}
