import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input()
  fname: string;
  @Input()
  lname: string;
  @Input()
  age: number;
  @Input('renumeration')
  msalary: number;
  constructor() { }

  ngOnInit() {
  }
  getAnnualPackage(): number {
    return this.msalary * 12;
  }

}
