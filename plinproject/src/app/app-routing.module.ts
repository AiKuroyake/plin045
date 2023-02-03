import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ModifyPlaylistComponent } from './modify-playlist/modify-playlist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "playlists",
    component: PlaylistsComponent
  },
  {
    path: "modifyPlaylist",
    component: ModifyPlaylistComponent
  },
  {
    path: "gameSettings",
    component: GameSettingsComponent
  },
  {
    path: "song",
    component: SongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
