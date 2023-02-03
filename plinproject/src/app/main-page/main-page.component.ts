import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { chatMessage } from './message.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {
  constructor(private router: Router, public db: DatabaseService) { }

  public startGame() {
    alert("Funguju");
    this.router.navigateByUrl("/gameSettings");
  }

  public a: number = 1;
  public b: number = 2;
  public c!: number;
  public d!: number;

  public addAB() {
    return this.c = this.a + this.b;
  }

  public multiplyAB() {
    return this.d = this.a * this.b;
  }

  public showHiddenText: boolean = false;

  public showSpoiler() {
    if (!this.showHiddenText) {
      this.showHiddenText = false;
    }
    else {
      this.showHiddenText = true;
    }
  }

  public showSpoilerTwo() {
    this.showHiddenText = !this.showHiddenText;
  }

  /*public chat: chatMessage[] = [
    {author: 'a', message: 'ahoj'}, 
    {author: 'b', message: 'baze'}, 
    {author: 'c', message: 'cucim'}];*/

  /*public send(value: any) {
    this.chat.push(value);
  }
  */

  public send(): void {
    //this.chat.push({author: this.newAuthor, message: this.newMessage});
    this.db.addMessage(this.newAuthor, this.newMessage)
    this.newAuthor = "";
    this.newMessage = "";
  }

  public newMessage!: string;
  public newAuthor!: string;

}
