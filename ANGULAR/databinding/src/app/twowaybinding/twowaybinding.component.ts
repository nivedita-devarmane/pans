import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  stu: string = "Baba";
  constructor() { }

  ngOnInit() {
  }

  getName(): string {
    return this.stu;
  }

}
