import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private obj: LoggingService) {

  }

  ngOnInit() {
  }

  xyz() {
    console.log("Second Component xyz()")

    this.obj.logMessage();
  }

}
