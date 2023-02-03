import { Component, Output } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})

export class NewMessageComponent {
  constructor(public db: DatabaseService) {}
  public newMessage!: string;
  public newAuthor!: string;

  public send(): void {
    //this.chat.push({author: this.newAuthor, message: this.newMessage});
    this.db.addMessage(this.newAuthor, this.newMessage)
    this.newAuthor = "";
    this.newMessage = "";
  }
}
