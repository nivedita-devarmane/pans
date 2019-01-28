import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autoloan',
  templateUrl: './autoloan.component.html',
  styleUrls: ['./autoloan.component.css']
})
export class AutoloanComponent implements OnInit {

  interest:number= 12;
  emi:number;
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
