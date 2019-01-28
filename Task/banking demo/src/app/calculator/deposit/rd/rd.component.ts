import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rd',
  templateUrl: './rd.component.html',
  styleUrls: ['./rd.component.css']
})
export class RdComponent implements OnInit {
  interest: number = 6;
  maturity: number;

  constructor() { }

  ngOnInit() {
  }
  calculateRdMaturity(rd: number, years: number): number {
    let n: number = years * 12;
    let si = rd * (n * (n + 1)) / (2 * 12) * (this.interest / 100);
    return this.maturity = (rd * n) + si;
  }

}
