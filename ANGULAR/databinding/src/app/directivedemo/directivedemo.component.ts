import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {

  switch: boolean = false;
  fruits = [];
  choice:number=0;

  toggle() {
    this.switch = !this.switch;

  }

  constructor() { }

  ngOnInit() {
  }
  addFruits(fruit:string){
    this.fruits.push(fruit);
  }
  deleteFruits(fruit:string){
    this.fruits.splice(0,1);
  }
  opted(ch:number){
this.choice = ch;
  }

}
