import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private obj:LoggingService) { }

  ngOnInit() {
  }
  abc(){
    console.log("First Component abc()")
    
    this.obj.logMessage();
  }

}
