import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {
  chatMsgs = [];
  constructor(private charObj: ChatService) { }

  sendMessager(msg: string) {
    this.charObj.putMessager("Ram : "+msg);
    this.chatMsgs = this.charObj.chatArr;

  }
  ngOnInit() {
  }

}
