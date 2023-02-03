import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secret-button',
  templateUrl: './secret-button.component.html',
  styleUrls: ['./secret-button.component.scss']
})
export class SecretButtonComponent {
  public textShown: boolean = false;
  @Input() public textMessage!: string;

  showSecretText() {
    this.textShown = !this.textShown;
  }
}
