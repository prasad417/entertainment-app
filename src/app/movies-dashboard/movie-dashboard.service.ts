import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Movie } from './models/movie.interface';

const Artists_API: string = environment.apiUrl;

@Injectable()
export class MovieDashboardService {
    constructor(private http: HttpClient) {}

    getMovies(): Observable<Movie[]> {
        return this.http
            .get<Movie[]>(`${Artists_API}/movies`)
            .pipe(
                map((response: Response) => response),
                catchError(this.errorHandler)
            );
    }

      errorHandler(error: HttpErrorResponse) {
          return Observable.throw(error.message || 'Server Error');
      }
}
