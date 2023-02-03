import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
  template:  `
  <button (click)="deleteMessage()">Smazat zpravu</button>`
})

export class DeleteButtonComponent {
  @Output() removeMessage: EventEmitter<void> = new EventEmitter();
  deleteMessage () {
    this.removeMessage.emit();
  }
}
