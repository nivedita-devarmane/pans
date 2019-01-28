import { Component, OnInit } from '@angular/core';
import { DbconService } from '../dbcon.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private obj: DbconService) { }
  atoz() {
    console.log("atoz() in ThirdComponent");
    this.obj.dbconnect();
  }
  ngOnInit() {
  }


}
