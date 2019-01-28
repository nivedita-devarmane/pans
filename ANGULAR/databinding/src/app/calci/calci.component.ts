import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent implements OnInit {
  @Input()
  a: number;
  @Input()
  b: number;
  @Input('operation')
  opr: string;

  constructor() { }

  ngOnInit() {
  }

  operation() {
    if (this.opr == "add") {
      return Number(this.a) + Number(this.b);
    }
    else if (this.opr = "sub") {
      return this.a - this.b;
    }
    else if (this.opr = "mul") {
      return this.a * this.b;
    }
    else if (this.opr = "div") {
      return this.a / this.b;
    }

  }
}









