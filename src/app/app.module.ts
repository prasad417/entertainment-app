import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { LanguageDashboardModule } from './language-dashboard/language-dashboard.module';
import { ArtistDashboardModule } from './artist-dashboard/artist-dashboard.module';
import { MovieDashboardModule } from './movies-dashboard/movie-dashboard.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { BackGroundComponent } from './background/background.component';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BackGroundComponent,
    routingComponents
  ],
  imports: [
    // Angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    LanguageDashboardModule,
    ArtistDashboardModule,
    MovieDashboardModule,
    // Routing
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
