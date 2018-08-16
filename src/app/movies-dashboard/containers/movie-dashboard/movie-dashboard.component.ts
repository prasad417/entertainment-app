import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  id: number;

  public errorMsg;

  constructor(private _Activatedroute: ActivatedRoute, private _router: Router, private movieService: MovieDashboardService) { }


  ngOnInit() {
    this.id = this._Activatedroute.snapshot.params['id'];
    this.movieService
      .getMovies(this.id)
      .subscribe((data: Movie[]) => this.movies = data.sort(
        (a: Movie, b: Movie) => (a.movieName < b.movieName ? -1 : 1)
      ));
      // (error: any) => this.errorMsg = error);
  }

}
