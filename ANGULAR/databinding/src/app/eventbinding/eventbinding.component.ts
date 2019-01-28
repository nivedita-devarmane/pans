import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  i: number = 0;
  uname: string = "Guest";
  constructor() { } 

  ngOnInit() {
  }

  abc() {
    console.log("Clicked these many times " + (++this.i));
  }

  greet(name: string) {
    this.uname = name;
  }

}
