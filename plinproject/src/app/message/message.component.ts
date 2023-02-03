import { Component, EventEmitter, Input, Output } from '@angular/core';
import { chatMessage } from '../main-page/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() public messageT!: chatMessage;
  @Output () removeMessage: EventEmitter<any> = new EventEmitter;
  messageRemoved(){
    this.removeMessage.emit();
  }
}