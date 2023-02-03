import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { ModifyPlaylistComponent } from './modify-playlist/modify-playlist.component';
import { SongComponent } from './song/song.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { NewMessageComponent } from './new-message/new-message.component';
import { SecretButtonComponent } from './secret-button/secret-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { ServiceWorkerModule } from '@angular/service-worker'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PlaylistsComponent,
    GameSettingsComponent,
    ModifyPlaylistComponent,
    SongComponent,
    MessageComponent,
    NewMessageComponent,
    SecretButtonComponent,
    DeleteButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }