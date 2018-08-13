import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LanguagesComponent } from './languages/languages.component';
import { ArtistsComponent } from './artists/artists.component';
import { MoviesComponent } from './movies/movies.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'movies', component: LanguagesComponent, pathMatch: 'full'},
    {path: 'music', component: LanguagesComponent, pathMatch: 'full'},
    {path: 'videos', component: LanguagesComponent, pathMatch: 'full'},
    {path: 'signup', component: SignUpComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [HomeComponent, LanguagesComponent, ArtistsComponent, MoviesComponent, SignUpComponent, LoginComponent];
