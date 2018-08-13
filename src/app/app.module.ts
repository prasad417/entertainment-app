import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderModule } from './navigation/header/header.module';
import { FooterModule } from './navigation/footer/footer.module';
import { LanguagesModule } from './languages/languages-module';
import { ArtistsModule } from './artists/artists.module';
import { MoviesModule } from './movies/movies-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    // Custom modules
    HeaderModule,
    FooterModule,
    LanguagesModule,
    ArtistsModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
