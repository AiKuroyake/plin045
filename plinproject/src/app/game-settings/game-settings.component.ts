import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss']
})
export class GameSettingsComponent {
  constructor(private gameRouter: Router){}

  goBack(){
    this.gameRouter.navigateByUrl("");
  }
}
