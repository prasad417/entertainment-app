import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeaderModule } from './navigation/header/header.module';
import { FooterModule } from './navigation/footer/footer.module';
import { LanguagesModule } from './languages/languages-module';
import { ArtistsModule } from './artists/artists.module';
import { MoviesModule } from './movies/movies-module';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // Custom modules
    HeaderModule,
    FooterModule,
    LanguagesModule,
    ArtistsModule,
    MoviesModule,
    // Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
