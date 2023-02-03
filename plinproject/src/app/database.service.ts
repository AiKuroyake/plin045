import { Injectable } from '@angular/core';
import { chatMessage } from './main-page/message.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  public messages: chatMessage[] = [];
  addMessage(author: string, message: string) {
    this.messages.push({author: author, message: message});
  }

  getAll() {
    return this.messages;
  }

  remove(index : number) {
    this.messages.splice(index, 1);
  }
}
