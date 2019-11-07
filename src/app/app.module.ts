import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuComponent } from './menu/menu.component';
import { MoviesComponent } from "./movies/movies.component";
import { SongsComponent } from './songs/songs.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TabConfigComponent } from './tab-config/tab-config.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MenuComponent,
    MoviesComponent,
    SongsComponent,
    MovieDetailsComponent,
    TabConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
