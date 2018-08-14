import { Component, OnInit } from '@angular/core';

import { Movie } from './../../models/movie.interface';

import { MovieDashboardService } from './../../movie-dashboard.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-artist-dashboard',
  templateUrl: './../movie-dashboard/movie-dashboard.component.html',
  styleUrls: ['./../movie-dashboard/movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {
  movies: Movie[];

  public errorMsg;

  constructor(private movieService: MovieDashboardService) { }

  ngOnInit() {
    this.movieService
      .getMovies()
      .subscribe((data: Movie[]) => this.movies = data );
      // (error: any) => this.errorMsg = error);
  }

}
