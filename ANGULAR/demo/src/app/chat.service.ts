
export class ChatService {
  chatArr = [];

  constructor() { }

  putMessager(msg: string)
   {
    this.chatArr.push(msg);
    

  }
}
