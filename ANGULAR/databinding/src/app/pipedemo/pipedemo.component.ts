import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  str: string = "Hello Pipe";
  amount: number = 1234567890;
  today = new Date();
  person = { "Name": "Mukesh", age: 25 };
  constructor() { }

  ngOnInit() {
  }
  

}
