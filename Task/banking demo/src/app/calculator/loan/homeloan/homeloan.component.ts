import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeloan',
  templateUrl: './homeloan.component.html',
  styleUrls: ['./homeloan.component.css']
})
export class HomeloanComponent implements OnInit {
  emi: number;
  interest: number = 10;
  constructor() { }

  ngOnInit() {
  }
  calculateEMI(lamt: number, t: number): number {
    let months = t * 12;
    let roipm = this.interest / (12 * 100);
    //let rpow = 1 + roipm;
    let temp = Math.pow(1+roipm, months);
    return this.emi = lamt * ((roipm * temp) / (temp - 1));

  } 

}
