import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-sham',
  templateUrl: './sham.component.html',
  styleUrls: ['./sham.component.css']
})
export class ShamComponent implements OnInit {

  chatMsgs = [];
  constructor(private charObj: ChatService) { }

  sendMessager(msg: string) {
    this.charObj.putMessager("Sham : "+msg);
    this.chatMsgs = this.charObj.chatArr;

  }
  ngOnInit() {
  }

}
