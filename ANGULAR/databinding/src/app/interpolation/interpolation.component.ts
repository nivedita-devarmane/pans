import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  fname: string = "Mannu";
  lname: string = "Annu";


  constructor() { }

  ngOnInit() {
  }

  getFullName(): string {
    return this.fname + " " + this.lname;
  }
}

