import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-ghansham',
  templateUrl: './ghansham.component.html',
  styleUrls: ['./ghansham.component.css']
})
export class GhanshamComponent implements OnInit {

  chatMsgs = [];
  constructor(private charObj: ChatService) { }

  sendMessager(msg: string) {
    this.charObj.putMessager("GhanSham : " + msg);
    this.chatMsgs = this.charObj.chatArr;

  }
  ngOnInit() {
  }

}
